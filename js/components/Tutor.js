import React from 'react';
import Vex from 'vexflow';
import { setTimeSig, setKeySig } from '../actions/actions';

const Tutor = React.createClass({
  propTypes: {
    timeSig: React.PropTypes.string.isRequired,
    keySig: React.PropTypes.string.isRequired,
    topNotes: React.PropTypes.arrayOf(React.PropTypes.object).isRequired,
    bottomNotes: React.PropTypes.arrayOf(React.PropTypes.object).isRequired,
    setTopNotes: React.PropTypes.func.isRequired,
    setBottomNotes: React.PropTypes.func.isRequired,
    setTimeSig: React.PropTypes.func.isRequired,
    setKeySig: React.PropTypes.func.isRequired
  },

  staveWidth: 150,

  componentDidMount() {
    this.canvas = this.refs.canvas;
    this.renderer = new Vex.Flow.Renderer(this.canvas, Vex.Flow.Renderer.Backends.SVG);
    this.ctx = this.renderer.getContext();
    this.redraw();
    this.addNotes(); // Need this second draw because of a VexFlow bug in rendering the brace a second time
    setTimeout(() => {
      this.props.setTimeSig('3/4');
    }, 2000)
    setTimeout(() => {
      this.props.setKeySig('Eb');
    }, 4000)
  },

  componentDidUpdate() {
    this.redraw();
  },

  componentWillReceiveProps() {
    this.clearCanvas();
  },

  componentWillUnmount() {
    this.canvas;
  },

  clearCanvas() {
    [...this.canvas.firstChild.children].forEach(child => {
      child.remove();
    });
  },

  drawGrandStaff(timeSig) {
    // This part is only to get the width including the key signature
    // to be used below
    this.topStaff = new Vex.Flow.Stave(20, 0, this.staveWidth)
      .addClef("treble")
      .addTimeSignature(this.props.timeSig)
      .addKeySignature(this.props.keySig)
      .setContext(this.ctx)
      .draw();

    // The staff is drawn above, then the offset width is gotten below.
    // 79.4353 is the default width for C Major so that's what the
    // start_x is with no keySig selected
    this.offsetX = this.topStaff.start_x - 79.4353;

    // Then the dummy staff is cleared to make room for the real staves
    this.clearCanvas();

    // Now put real staves in with offset included in staff width
    this.topStaff = new Vex.Flow.Stave(20, 0, this.staveWidth + this.offsetX)
      .addClef("treble")
      .addTimeSignature(this.props.timeSig)
      .addKeySignature(this.props.keySig)
      .setContext(this.ctx)
      .draw();

    this.bottomStaff = new Vex.Flow.Stave(20, 100, this.staveWidth + this.offsetX)
      .addClef("bass")
      .addTimeSignature(this.props.timeSig)
      .addKeySignature(this.props.keySig)
      .setContext(this.ctx)
      .draw();

    this.brace = new Vex.Flow.StaveConnector(this.topStaff, this.bottomStaff)
      .setType(3) // 3 = brace
      .setContext(this.ctx)
      .draw();

    this.lineRight = new Vex.Flow.StaveConnector(this.topStaff, this.bottomStaff)
      .setType(6)
      .setContext(this.ctx)
      .draw();

    this.lineLeft = new Vex.Flow.StaveConnector(this.topStaff, this.bottomStaff)
      .setType(1)
      .setContext(this.ctx)
      .draw();
  },

  drawVoices() {
    this.topVoice = new Vex.Flow.Voice({
      num_beats: 1,
      beat_value: 4,
      resolution: Vex.Flow.RESOLUTION
    });

    this.bottomVoice = new Vex.Flow.Voice({
      num_beats: 1,
      beat_value: 4,
      resolution: Vex.Flow.RESOLUTION
    })

    this.topVoice.addTickables(this.props.topNotes);
    this.bottomVoice.addTickables(this.props.bottomNotes);

    const formatter = new Vex.Flow.Formatter();
    formatter.joinVoices([this.topVoice])
    formatter.joinVoices([this.bottomVoice])
    formatter.format([this.topVoice, this.bottomVoice], this.staveWidth + this.offsetX);

    const maxX = Math.max(this.topStaff.getNoteStartX(), this.bottomStaff.getNoteStartX());
    this.topStaff.setNoteStartX(maxX + 24);
    this.bottomStaff.setNoteStartX(maxX + 24);

    this.topVoice.draw(this.ctx, this.topStaff);
    this.bottomVoice.draw(this.ctx, this.bottomStaff);
  },

  addNotes() {
    this.props.setTopNotes([
      new Vex.Flow.StaveNote({
        keys: ['c/4', 'e/4', 'g/4'],
        duration: "q",
        auto_stem: true
      }),
    ]);
    this.props.setBottomNotes([
      new Vex.Flow.StaveNote({
        clef: 'bass',
        keys: ['c/4', 'e/4', 'g/4'],
        duration: "q",
        auto_stem: true
      }),
    ]);
  },

  redraw() {
    this.drawGrandStaff();
    if (this.props.topNotes.length > 0 && this.props.bottomNotes.length > 0) {
      this.drawVoices();
    }
  },

  render() {
    return (
      <div
        ref="canvas"
        className="canvas"
        style={{width: this.staveWidth + 100, height: 220}}>
      </div>
    );
  }
});

export default Tutor;