using System.Collections.Concurrent;

namespace Basestation_Software.Web.Core.Services;

public class ConcurrentHashSet<T> : ConcurrentDictionary<T, byte>
    where T : notnull
{
    const byte DummyByte = byte.MinValue;

    // For convenience, we add HashSet equivalent APIs here...
    public bool Contains(T item) => ContainsKey(item);
    public bool Add(T item) => TryAdd(item, DummyByte);
    public bool Remove(T item) => TryRemove(item, out _);
}

public class DatabaseService
{
    // Declare member variables.
    public delegate Task Callback();
    private ConcurrentDictionary<Type, ConcurrentHashSet<Callback>> _tableChangedNotifier = [];
    private ConcurrentDictionary<(Type, Guid), ConcurrentHashSet<Callback>> _entityChangedNotifier = [];
    private ConcurrentDictionary<(Type, Guid), ConcurrentHashSet<Callback>> _entityDeletedNotifier = [];

    public void SubscribeToTableChanges(Type type, Callback callback)
    {
        _tableChangedNotifier.TryAdd(type, []);
        _tableChangedNotifier[type].Add(callback);
    }

    public void UnsubscribeFromTableChanges(Type type, Callback callback)
    {
        _tableChangedNotifier.TryAdd(type, []);
        _tableChangedNotifier[type].Remove(callback);
    }

    public void SubscribeToEntityChanges(Type type, Guid id, Callback callback)
    {
        _entityChangedNotifier.TryAdd((type, id), []);
        _entityChangedNotifier[(type, id)].Add(callback);
    }

    public void UnsubscribeFromEntityChanges(Type type, Guid id, Callback callback)
    {
        _entityChangedNotifier.TryAdd((type, id), []);
        _entityChangedNotifier[(type, id)].Remove(callback);
    }

    public void SubscribeToEntityDeleted(Type type, Guid id, Callback callback)
    {
        _entityDeletedNotifier.TryAdd((type, id), []);
        _entityDeletedNotifier[(type, id)].Add(callback);
    }

    public void UnsubscribeFromEntityDeleted(Type type, Guid id, Callback callback)
    {
        _entityDeletedNotifier.TryAdd((type, id), []);
        _entityDeletedNotifier[(type, id)].Remove(callback);
    }

    public async Task NotifyChanges(Type type)
    {
        if (_tableChangedNotifier.TryGetValue(type, out ConcurrentHashSet<Callback>? value))
            await Task.WhenAll(value.Select(callback => callback.Key.Invoke()));
    }

    public async Task NotifyChanges(Type type, Guid id)
    {
        if (_entityChangedNotifier.TryGetValue((type, id), out ConcurrentHashSet<Callback>? value))
            await Task.WhenAll(value.Select(callback => callback.Key.Invoke()));
    }

    public async Task NotifyDeleted(Type type, Guid id)
    {
        if (_entityDeletedNotifier.TryGetValue((type, id), out ConcurrentHashSet<Callback>? value))
            await Task.WhenAll(value.Select(callback => callback.Key.Invoke()));
    }
}

public enum TableName { Pages, Waypoints, MapTiles, LidarTiles, ArmPresets, ControlPresets }