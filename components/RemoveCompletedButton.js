class RemoveCompletedButton extends React.Component {
  render() {
    if(this.props.show) {
      return(
        <button id="clearCompleted" className="btn btn-outline-secondary mx-1"  onClick={removeCheckedItems}>
            Remove Completed
        </button>
      );
    } else {
      return null;
    }
  }
}

RemoveCompletedButton.defaultProps = {
  show: false
};

ReactDOM.render(<RemoveCompletedButton/>, document.querySelector('[data-react-component="RemoveCompletedButton"]'));
