# mjml-image-hover

Adds the ability to have mj-image's be hoverable.

## Usage

```
<mjml>
  <mj-head>
    <mj-image-hover-head hover-name="cheese" />
  </mj-head>
  <mj-body>
    <mj-image-hover width="300px" hover-name="cheese" src="https://i.picsum.photos/id/237/300/300.jpg" src-hover="https://i.picsum.photos/id/236/300/300.jpg" />
  </mj-body>
</mjml>
```

## Setup
```
npm install mjml-image-hover --save
cat <<EOF > .mjmlconfig
{
  "packages": [
    "mjml-image-hover/lib/MjImageHover.js",
    "mjml-image-hover/lib/MjImageHoverHead.js",
  ]
}
EOF
```

## Documentation

The `mj-image-hover` is a wrapper around mj-image so all the same attributes exist.

The `mj-image-hover-head` is used to add needed styles and mso conditionals to the head tag, at the moment there is no way to add raw content to the head from a body component. So both are required.

There are 2 new ones.

```
hover-name  - The name of the hover, needed for gmail should be a short lowercase string such as (dog), no special characters.
src-hover   - The url of the image to switch to when hovered.
```