namespace Basestation_Software.Web.Core.Layout;

public static class ComponentAttributes
{
    /// <summary>
    /// Removes a component from the component dropdown menu.
    /// Add this attribute if your component does not work as a sandalone component.
    /// </summary>
    [AttributeUsage(AttributeTargets.Class, Inherited = false)]
    public class Ignore : Attribute
    {

    }
}
