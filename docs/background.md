# Background

A jQuery plugin for full-frame image and video backgrounds.

* [Use](#use)
* [Options](#options)
* [Events](#events)
* [Methods](#methods)
* [CSS](#css)

## Use 

#### Main

```markup
background.js
background.css
```

#### Dependencies

```markup
core.js
transition.js
```

### Basic

Create a new Background by passing the source image URL at initialization:

```javascript
$(".target").background({
	source: "http://example.com/image.jpg"
});
```

```markup
<div class="target">
	...
</div>
```

### Responsive

Create a responsive-friendly Background by defining key/value pairs containing the `min-width` image URLs:


```javascript
$(".target").background({
	source: {
		"0px": "http://example.com/image-small.jpg",
		"980px": "http://example.com/image-large.jpg"
	}
});
```

### HTML5 Video

Create a video Background by defining proper browser-specific source video URLs, as well as a poster image URL:

```javascript
$(".target").background({
	source: {
		poster: "http://example.com/poster.jpg",
		webm: "http://example.com/video.webm",
		mp4: "http://example.com/video.mp4",
		ogg: "http://example.com/video.ogv"
	}
});
```

### YouTube Video

Create a YouTube video Background by passing the YouTube embed URL as the source. If you do not define a poster, the YouTube thumbnail will be used:

```javascript
$(".target").background({
	source: {
		poster: "http://example.com/poster.jpg",
		video: "//www.youtube.com/embed/VIDEO_ID"
	}
});
```

## Options

Set instance options by passing a valid object at initialization, or to the public `defaults` method. Custom options for a specific instance can also be set by attaching a `data-background-options` attribute to the target elment. This attribute should contain the properly formatted JSON object representing the custom options.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `autoPlay` | `boolean` | `true` | Autoplay video |
| `customClass` | `string` | `''` | Class applied to instance |
| `embedRatio` | `number` | `1.777777` | Video / embed ratio (16/9) |
| `loop` | `boolean` | `true` | Loop video |
| `mute` | `boolean` | `true` | Mute video |
| `source` | `string OR object` | `null` | Source image (string or object) or video (object) or YouTube (object) |

## Events

Events are triggered on the target instance's element, unless otherwise stated.

| Event | Description |
| --- | --- |
| `loaded.background` | Background media loaded |
| `ready.background` | Background media ready |

## Methods

Methods are publicly available to all active instances, unless otherwise stated.

### load

Loads source media

```javascript
$(".target").background("load", "path/to/image.jpg");
```

#### Parameters

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `source` | `string OR object` | &nbsp; | Source image (string) or video (object) or YouTube (object); |

### pause

Pauses target video

```javascript
$(".target").background("pause");
```

### play

Plays target video

```javascript
$(".target").background("play");
```

### unload

Unloads current media

```javascript
$(".target").background("unload");
```

## CSS

| Class | Type | Description |
| --- | --- | --- |
| `.fs-background-element` | `element` | Target elmement |
| `.fs-background` | `element` | Base widget class |
| `.fs-background-container` | `element` | Container element |
| `.fs-background-media` | `element` | Media element |
| `.fs-background-media.fs-background-animated` | `modifier` | Indicates animated state |
| `.fs-background-media.fs-background-navtive` | `modifier` | Indicates native support |
| `.fs-background-media.fs-background-fixed` | `modifier` | Indicates fixed positioning |
| `.fs-background-embed` | `element` | Embed/iFrame element |
| `.fs-background-embed.fs-background-embed-ready` | `modifier` | Indicates ready state |

