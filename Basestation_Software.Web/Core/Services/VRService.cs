using System.Collections.Concurrent;

namespace Basestation_Software.Web.Core.Services;

public class VRService
{
    private int[] _sources = [-1, -1, -1, -1, -1];
    public delegate Task SourceSetCallback(int display, int camera);

    private ConcurrentHashSet<SourceSetCallback> _sourceSetNotifier = [];

    public void SubscribeToSourceSet(SourceSetCallback callback)
    {
        _sourceSetNotifier.Add(callback);
    }

    public void UnsubscribeFromSourceSet(SourceSetCallback callback)
    {
        _sourceSetNotifier.Remove(callback);
    }

    public async Task SetSource(int display, int camera)
    {
        _sources[display] = camera;
        await Task.WhenAll(_sourceSetNotifier.Select(callback => callback.Key.Invoke(display, camera)));
        await SetRotation(display, _rotations[display]);
    }
    public int GetSource(int display) => _sources[display];

    private double[] _rotations = new double[5];
    public delegate Task RotationSetCallback(int display, double rotation);

    private ConcurrentHashSet<RotationSetCallback> _rotationSetNotifier = [];

    public void SubscribeToRotationSet(RotationSetCallback callback)
    {
        _rotationSetNotifier.Add(callback);
    }

    public void UnsubscribeFromRotationSet(RotationSetCallback callback)
    {
        _rotationSetNotifier.Remove(callback);
    }

    public async Task SetRotation(int display, double rotation)
    {
        _rotations[display] = rotation;
        await Task.WhenAll(_rotationSetNotifier.Select(callback => callback.Key.Invoke(display, rotation)));
    }

    public double GetRotation(int display) => _rotations[display];

    private double[] _grid = [140, 170, 210, 230, 60, 80, 110, 130];
    public delegate Task GridSetCallback(double[] grid);

    private ConcurrentHashSet<GridSetCallback> _gridSetNotifier = [];

    public void SubscribeToGridSet(GridSetCallback callback)
    {
        _gridSetNotifier.Add(callback);
    }

    public void UnsubscribeFromGridSet(GridSetCallback callback)
    {
        _gridSetNotifier.Remove(callback);
    }

    public async Task SetGrid(double[] grid)
    {
        _grid = grid;
        await Task.WhenAll(_gridSetNotifier.Select(callback => callback.Key.Invoke(_grid)));
    }

    public double[] GetGrid()
    {
        return _grid;
    }
}
