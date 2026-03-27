# Overview

Documentation for local-storage, here to make it easier to find what settings exist and what they do.

## changeLocalSetting

A function that allows you to input a settings object (ex. {img: "display: none;"}).

### Settings: 

- active - boolean deciding if the settings apply (is the extension active?)
- img - any css after will apply to all images in all blocked urls

### Example:

changeLocalSetting({active: true, img: "display: none;"});  
sets active to true, and image to "display: none;"