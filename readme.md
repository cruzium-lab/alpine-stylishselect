# Alpine.js Wrapper for Stylish Select

## Dependencies

- [Stylish Select](https://cdn.cruzium.info/plugin/stylish-select/)

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

Refer to [Options](https://cdn.cruzium.info/doc/stylish-select/latest/readme.md#options) section.

## Limitations

Refer to [Limitiations](https://cdn.cruzium.info/doc/stylish-select/latest/readme.md#limitations) section.
