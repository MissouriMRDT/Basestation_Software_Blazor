# How to use JavaScript for BaseStation development
++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

## Summary

This guide will walk you through the steps to modify or add new JavasScript
source files. If you do not need to modify any JS files, you do not need to
read this.

While you can modify the JS served in `wwwroot/js/` to make temporary fixes,
you should **not** do any permanent development in that folder. The real JS
lives in `Core/JS/src/`. This directory is set up with NPM to bundle source
files with library modules and output them to `wwwwroot/js/`.

## Steps

1. Install NPM. The best way is to [install Node.js](https://nodejs.org/en/download).
1. `cd` into `Basestation_Software.Web/Core/JS/`.
1. Run `npm install`.
1. Wait 7 million years for npm to install every package on the world wide web.
1. Make changes to JS files as needed.
1. Run `npm run build` to package all the needed files into `wwwroot/js/`

## Importing into C#

Because these JS files aren't being added as a `<script>` tag in `App.razor`,
their functions aren't loaded into the global namespace. Because of this, you
must `export` any relevant functions/variables in javascript and explicitly
`import` the module to use in your razor code. The best time to do this is on
the first render because by then, all JS files will have already been loaded.

**in JS/src/my-js-file.js:**
```js
import "some-npm-module";

export function myJSFunction(my, func, args) {
    // do something 
}
```

**in Components/MyComponent.razor:**
```cshtml
@inject IJSRuntime _IJSRuntime

@code {
    protected override async Task OnAfterRenderAsync(bool firstRender)
    {
        if (firstRender)
        {
            var jsModule = await _IJSRuntime.InvokeAsync<IJSObjectReference>("import", "./js/my-js-file.js");
            await jsModule.InvokeVoidAsync("myJSFunction", [My, Func, Args]);
        }
    }
}
```

For more info, see the [official Blazor documentation](https://learn.microsoft.com/en-us/aspnet/core/blazor/javascript-interoperability/?view=aspnetcore-9.0).

## Why?

Let's face it: NPM is awful. Why would you adulterate BaseStation with this
horrid dependency?

The alternative to having a build system is to go on a scavenger hunt to find
minified libraries somewhere on the internet and copy them into the repo, along
with any static content like css or images. Oft times it's hard to find source
files that are compatible with JS modules. Packaging NPM modules allows this
bundling process to happen automatically. The built files are tracked by git so
that *most* people don't have to carry out this build process. However, if you
are one of the unfortunate souls forced to resort to JS interop, you'll have to
install NPM and the thousands of packages that pollute the JS ecosystem. After
much deliberation, though, I've concluded that NPM is a necessary evil.

# Sorry!
