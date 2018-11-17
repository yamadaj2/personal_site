$(function(){
  if (('#sc-player').length > 0){
    var scIframeElement = document.querySelector('#sc-player');
    var scTrack = SC.Widget(scIframeElement);
  }

  console.log('music js here');
  playSoundcloudVideo();

  function playSynthesiaVideo() {
    console.log('clickSynthesiaVideo called');
  }

  function pauseSynthesiaVideo() {
    console.log('clickSynthesiaVideo called');
  }

  function pauseYouTubeVideo() {
    console.log('clickYouTubeVideo called');
  }

  function playSoundcloudVideo() {
    console.log('playSoundcloudVideo called');
    scTrack.play();
  }

  function pauseSoundcloudVideo() {
    console.log('pauseSoundcloudVideo called');
    scTrack.pause();
  }
});