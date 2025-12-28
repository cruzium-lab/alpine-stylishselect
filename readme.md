# Alpine.js Wrapper for Stylish Select

## Dependencies

- [Stylish Select](https://github.com/cruzium-lab/stylish-select)

## Installation

*Include JS file*

```html
<script type="text/javascript" src="https://cdn.cruzium.info/alpine-stylishselect/latest/alpine-stylishselect.min.js"></script>
```

*Register with Alpine*

```javascript
document.addEventListener('alpine:init', function() {
	Alpine.plugin(Alpine_stylishSelect());
});
```
or with global options
```javascript
document.addEventListener('alpine:init', function() {
	Alpine.plugin(Alpine_stylishSelect({
		...
	}));
});
```

## Usage

*HTML Markup*
```html
<select name="foo" id="foo" x-model="foo" x-stylishselect>
	<option value="">Please select</option>
	<option value="1">Option 1</option>
	<option value="2">Option 2</option>
	<option value="3">Option 3</option>
</select>
```

Note: The plugin requires attribute `x-model` to work.

## Options

Refer to [Options](https://github.com/cruzium-lab/stylish-select#options) section.

## Limitations

Refer to [Limitiations](https://github.com/cruzium-lab/stylish-select#limitations) section.

## Support This Project

[!["Buy Me a Coffee"](https://www.buymeacoffee.com/assets/img/custom_images/yellow_img.png)](https://buymeacoffee.com/cruziumdigital)
