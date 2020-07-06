Quasar App Extension Responsive
===

This repository have classes that use the [basic Quasar variables](https://quasar.dev/style/sass-scss-variables#Variables-list) to create a range of different responsive values through or projects that will use those classes.
Using those, we can change the default margin and padding to another screen size margin and/or padding

# Install

To install Just use the command bellow in a quasar project
```bash
quasar ext add @bildvitta/responsive
```

The Quasar CLI will retrieve it automatically from [NPM](https://www.npmjs.com/package/@bildvitta/quasar-app-extension-responsive) and install the extension.

## Content

This project have diferente classes to deal with Margin and Padding on the project using the Quasar sizes and the Quasar breakpoints.

You can use classes to edit your component margin and padding in your project according to the breakpoint and size on Quasar variables, to use this classes you can follow the example below.

```
  {breakpoint}:q-{margin/padding}-{breakpoint-size}
```

|            | xs       | sm         | md          | lg          | xl          |
|------------|----------|------------|-------------|-------------|-------------|
| Breakpoint | from 0px | from 600px | from 1024px | from 1440px | from 1920px |
| Size       | 4px      | 8px        | 16px        | 24px        | 48px        |
> The spacing is due by a calc done on Quasar documentation, if you want do know more, please, see it [here](https://quasar.dev/style/sass-scss-variables#Variables-list)

This was made to change the default margin and padding from Quasar and change it according the default variables. 

### Examples 

```html
<!-- on xs breakpoint (from 0px up), margin-top: none | on xl breakpoint (from 1920px), margin-bottom: 4px (xs breakpoint size) -->
<div class="xs:q-mt-none xl:q-mb-xs">
  Content
</div>
```

```html
<!-- on xs breakpoint (from 0px up), margin-top and margin-bottom: 16px (md size ) | on xs breakpoint (from 0px up), margin-left and margin-right: 24px (lg size)-->
<div class="xs:q-mx-md xs:q-my-lg">
  Content
</div>
```

```html
<!-- on lg breakpoint (from 1440px up), padding: 0px on all sides -->
<div class="lg:q-pa-none">
  Content
</div>
```

# Uninstall
```bash
quasar ext remove @bildvitta/responsive
```
