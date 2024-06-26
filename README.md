# Slider with Multiple Thumbs

### In this application I have created slider with multiple anchor in react native using PanResponder component.

### Code Breakdown
1) State Management:

    thumbPositions: An array holding the positions of each thumb on the slider. Initialized to [0, 0.25, 0.5, 0.75].

    selectedThumb: Tracks which thumb is currently being moved. Initialized to null.

2) Thumb Colors:

    colors: An array holding the colors for each thumb: ['red', 'blue', 'green', 'orange'].

3) PanResponders:

    panResponders: An array of pan responders, one for each thumb. Each pan responder handles touch gestures for a specific thumb.

    onStartShouldSetPanResponder: Returns true to start handling touch gestures.

    onPanResponderGrant: Sets the selectedThumb to the index of the thumb being touched.

    onPanResponderRelease: Resets the selectedThumb to null when the touch is released.

    onPanResponderMove: Updates the position of the selected thumb based on the touch movement.

4) Rendering:

    sliderTrack: A View representing the track of the slider, styled with a gray background.

    Thumbs: Each thumb is rendered as a View within the track, positioned according to its value in thumbPositions and colored according to its value in colors.

    Values: The positions of each thumb are displayed below the slider, with text styled to match the thumb color.

5) Styles:

    container: Centers the slider and values in the middle of the screen.
    
    sliderTrack: Defines the appearance of the slider track.
    
    thumb: Styles each thumb with a circular shape and positions them absolutely along the track.
    
    valueContainer: Adds spacing above the values.

    valueText: Styles the text displaying each thumb's position.

### Features
1) Multiple Thumbs: The slider includes four thumbs, each with a distinct color: red, blue, green, and orange.


2) Independent Thumb Movement: Each thumb can be moved independently, allowing for precise control over their positions.


3) Real-time Position Update: The position of each thumb is displayed in real-time below the slider, with the text color matching the thumb color.


4) PanResponder for Touch Handling: The component uses React Native's PanResponder to handle touch gestures, enabling smooth and responsive thumb movement.