class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      item: [
      { id: 0, sentence: 'Aujourd\'hui est un jour spécial ...', btn: 'Clique ici', active: true },
      { id: 1, sentence: 'Je suis sur que tu es impatient', btn: 'Vite la suite !', active: false },
      { id: 2, sentence: 'Tout le monde te regarde', btn: 'Oh purée', active: false },
      { id: 3, sentence: 'En meme temps tu as la classe', btn: 'Oué c\'est vrai', active: false },
      { id: 4, sentence: 'Meme dans le métro', btn: 'Oué ...', active: false },
      { id: 5, sentence: 'Tu t\'es déja endormi?', btn: 'Non non !', active: false },
      { id: 6, sentence: 'Joyeux Anniversaire !!', btn: 'Sérieux il est ou le gateau', active: false },
      { id: 7, sentence: 'JOYEAUX ANNIVERSAIRE !!!!', btn: 'On s\'amuse comme des fous', active: false },
      { id: 8, sentence: 'Aller juste pour rigoler', btn: 'On recommence?', active: false },
    ],

      activeState: 0 };

  }

  done(key) {
    const index = this.state.item.findIndex(i => i.id === key);
    let itemCopy = this.state.item.slice();
    let newActiveS;
    if (index === this.state.item.length-1) {
      itemCopy[index].active = false;
      itemCopy[0].active = true;
      newActiveS = 0;
    } else {
      itemCopy[index].active = false;
      itemCopy[index + 1].active = true;
      newActiveS = this.state.activeState + 1;
    }

    this.setState({ activeState: newActiveS, item: itemCopy });
  }

  render() {
    return (
      React.createElement("div", { className: 'mainContainer state' + this.state.activeState },
      React.createElement(List, { item: this.state.item, onDone: key => this.done(key) })));


  }}

var List = React.createClass({ displayName: "List",
  render() {
    let itemsToDisplay = this.props.item.map(i => {
      return React.createElement(ListItem, { key: i.id, sentence: i.sentence, active: i.active, onDone: () => this.props.onDone(i.id), btn: i.btn });
    });
    return (
      React.createElement("div", { className: "container" },
      itemsToDisplay));


  } });



var ListItem = React.createClass({ displayName: "ListItem",
  render() {
    return (
      React.createElement("div", { key: this.props.key, className: this.props.active ? 'active sentence' : 'hidden sentence' },
      React.createElement("p", null, this.props.sentence),
      React.createElement("div", null,
      React.createElement("button", { className: this.props.btn === '' ? 'hidden' : 'btn', onClick: () => this.props.onDone() }, this.props.btn))));



  } });


ReactDOM.render(
React.createElement(Card, null),
document.getElementById('BthdyCard'));