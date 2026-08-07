using System.Collections.ObjectModel;

namespace Basestation_Software.Web.Core.Services;

public class CameraService
{
    public ObservableCollection<string> Names { get; } = [];

    public CameraService()
    {
        for (int index = 0; index < 8; index++)
            Names.Add(index.ToString());
    }
}