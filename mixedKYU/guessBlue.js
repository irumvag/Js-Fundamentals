function guessBlue(blueStart, redStart, bluePulled, redPulled) {
  // find remaining and calculate the proberbilit.
    return (blueStart-bluePulled)/
      (blueStart+redStart-bluePulled-redPulled);
}