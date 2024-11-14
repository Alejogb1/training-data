---
title: "data format standards (COCO, Pascal VOC)"
date: '2024-11-14'
id: 'data-format-standards-coco-pascal-voc'
---

Hey, so you're looking at data format standards for object detection right  COCO and Pascal VOC are the big ones  COCO is a bit more modern,  lots of stuff labeled like keypoints and segmentation  Pascal VOC is more traditional bounding boxes  They both use XML to store the labels  Here's a snippet of how the Pascal VOC format looks:

```xml
<annotation>
  <filename>000001.jpg</filename>
  <size>
    <width>640</width>
    <height>480</height>
    <depth>3</depth>
  </size>
  <object>
    <name>car</name>
    <bndbox>
      <xmin>100</xmin>
      <ymin>150</ymin>
      <xmax>200</xmax>
      <ymax>250</ymax>
    </bndbox>
  </object>
</annotation>
```

You can search for "Pascal VOC format" or "COCO format" to find more info about them, like how to use them with different tools  Let me know if you have any other questions!
