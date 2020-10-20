# Quasar App Extension Responsive

This repository have classes that use the [basic Quasar variables](https://quasar.dev/style/sass-scss-variables#Variables-list) to create a range of different responsive values through or projects that will use those classes.
Using those, we can change the default margin and padding to another screen size margin and/or padding

# Install

To install just use the command bellow in a quasar project

```bash
quasar ext add @bildvitta/responsive
```

The Quasar CLI will retrieve it automatically from [NPM](https://www.npmjs.com/package/@bildvitta/quasar-app-extension-responsive) and install the extension.

## Content

### Breakpoint

In here, you can have different classes to deal with Margin and Padding on the project using the Quasar sizes and the Quasar breakpoints.

You can use classes to edit your component margin and padding in your project according to the breakpoint and size on Quasar variables, to use this classes you can follow the example below.

```
  {breakpoint}:q-{margin/padding}{side}-{breakpoint-size}
```

|            | xs       | sm         | md          | lg          | xl          |
| ---------- | -------- | ---------- | ----------- | ----------- | ----------- |
| Breakpoint | from 0px | from 600px | from 1024px | from 1440px | from 1920px |
| Size       | 4px      | 8px        | 16px        | 24px        | 48px        |

> The spacing is due by a calc done on Quasar documentation, if you want do know more, please, see it [here](https://quasar.dev/style/sass-scss-variables#Variables-list)

This was made to change the default margin and padding from Quasar and change it according the default variables.

#### Examples

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

### Typography

On Typography, you can use the classes that we have here to deal with a few propreties for yor text, during the viewport size, like:

- Align (center, left, right, justify)
- Transformations (captalize, lowercase, uppercase)
- Weight (100, 200, 300, ..., 900)
- Others (italic, bold, strike, no-wrap)

#### Examples

```html
<!-- on xs breakpoint (from 0px up), all text on this div will be align center -->
<div class="xs:text-center">
  Content
</div>
```

```html
<!-- on xs breakpoint (from 0px up), the text weight will be 500 but when the screen gets on md it gets down to 400 -->
<div class="xs:text-weight-500 md:text-weight-400">
  Content
</div>
```

### Positions

In Positions, you can use the Absolute, Fixed and relative-position classes to assign a position to the content:

- relative-position
- absolute
- fixed

#### Examples

```html
<!-- class with position relative -->
<div class="relative-position">
  Content
</div>
```

```html
<!-- class with position absolute -->
<div class="absolute">
  Content
</div>
```

```html
<!-- class with position fixed -->
<div class="fixed">
  Content
</div>
```

### Sizing

In Sizes you can use the classes we have here to assign a width (minimum / maximum) for your element, like:

- min-w- (100, 200, ..., 1000, 1-of-10, 2-of-10, ..., full, 1-of-4, 3-of-4)
- max-w- (100, 200, ..., 1000, 1-of-10, 2-of-10, ..., full, 1-of-4, 3-of-4)
- w- (100, 200, ..., 1000, 1-of-10, 2-of-10, ..., full, 1-of-4, 3-of-4)


#### Examples

```html
<!-- this class will occupy at least 300 px -->
<div class="min-w-300">
  Content
</div>
```

```html
<!-- this class will occupied 100% width parent div -->
<div class="w-full">
  Content
</div>
```

```html
<!-- this class will occupy a maximum of 1/4  parent div width -->
<div class="max-w-1-of-4">
  Content
</div>
```

# Uninstall

```bash
quasar ext remove @bildvitta/responsive
```
