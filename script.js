var wavesurfer = WaveSurfer.create({
  container: '#waveform',
  waveColor: 'darkorange',
  progressColor: 'purple',
  splitChannels: true,
  height: 64
});

wavesurfer.load('https://wavesurfer-js.org/example/split-channels/stereo.mp3');
wavesurfer.on('redraw', function (e) { //peak Datas
  console.log(e)
});