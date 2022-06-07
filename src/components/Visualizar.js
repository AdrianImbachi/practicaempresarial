import React, { Component } from "react";
import axios from 'axios';


class Visualizar extends Component {

    constructor(props) {
        super(props);
        this.state = {
          myHtml: ''
        };
    }

    getHtml() {
        axios.get('https://es.reactjs.org/docs/handling-events.html').then(response => {
          const extractScriptRegex = /<script\b[^>]*>([\s\S]*?)<\/script>/gmi;
          let scriptsExtracted;
          let innerHtml = response.data;
          while(scriptsExtracted = extractScriptRegex.exec(response.data)) {
            innerHtml = innerHtml.replace(scriptsExtracted[0], '');
            window.eval(scriptsExtracted[1]);
          }
          this.setState({ myHtml: innerHtml });
        }).catch(error => {
          this.setState({ myHtml: '<h1>Error</h1>' });
        });
      }

      componentDidMount() {
    this.getHtml();
  }

    render() {
        const { myHtml } = this.state;
        return (
            <div>
                <div dangerouslySetInnerHTML={{ __html: myHtml }}></div>
            </div>
        );    
    }
}

export default Visualizar;