import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header';
import Navigation from './Components/Navigation';
//import Image from './Components/Image';
//import alok from './img/alok.jpg'

class App extends Component {
  
  state = {
    profName: 'Dr. Nagendra Pratap Singh', 
    profDetails: {
      "Name": 'Dr. Nagendra Pratap Singh',
      "Designation": 'Assistant Professor',
      "Department": 'Computer Science & Engineering',
      "Qualification": 'Ph.D.',
      "Specialization": 'Medical Image Processing, Computer Vision, Machine Learning, Pattern Recognition',
      "Phone": '9169081383',
      "Email ID": 'nps@nith.ac.in'
    },

    eduQul: {
      'thead': ['Name of the Degree','Year Of Passing','Institute/University'],
      'tbody': {"0": ['Ph. D. (Computer Science and Engineering)', '2016', `Indian Institute of Technology (BHU), Varanasi, U.P., India`],
      "1": ['M. Tech. (Computer Science and Engineering)', '2011', `Motilal Nehru National Institute of Technology (MNNIT), Allahabad, U.P., India`],
      "2": ['B. Tech. (Computer Science and Engineering)', '2002', `Institute of Engineering and Technology (I. E. T.), Kanpur, India`],
      "3": ['Intermediate (Science Group with Maths)', '1992', `Government Inter College, Allahabad, U.P., India`],
      "4": ['High School (Science Group)', '1990', `Government Inter College, Allahabad, U.P., India`]}
    },

    resList: {
      'thead': ['Role','Project Type','Title','Funding Agency','From','To', 'Amount', 'Status', 'Co-Investigator'],
      'tbody': {"0": ['Role','Project Type','Title','Funding Agency','From','To', 'Amount', 'Status', 'Co-Investigator'],
      "1": ['Role','Project Type','Title','Funding Agency','From','To', 'Amount', 'Status', 'Co-Investigator'],
      "2": ['Role','Project Type','Title','Funding Agency','From','To', 'Amount', 'Status', 'Co-Investigator'],
      "3": ['Role','Project Type','Title','Funding Agency','From','To', 'Amount', 'Status', 'Co-Investigator'],
      "4": ['Role','Project Type','Title','Funding Agency','From','To', 'Amount', 'Status', 'Co-Investigator']}
    },

    teachExp: {
      'thead': ['Programme Name','Name of Institute / Universities','From','To'],
      'tbody': {"0": ['Assistant Professor', `Department of Computer Science and Engineering, National Institute of Technology Hamirpur,
      Hamirpur, H.P., India.`, '20/11/2018', 'Till Now'],
      "1": ['Assistant Professor', `Department of Computer Science and Engineering, Madan Mohan Malaviya University of
      Technology, Gorakhpur, U.P., India.`, '04/07/2016', '19/11/2018'],
      "2": ['Assistant Professor', `Naraina College of Engineering and Technology, Kanpur, U.P., India.`, '01/08/2011', '22/07/2013'],
      "3": ['Assistant Professor', `Ambalika Institute of Management and Technology, Lucknow U.P., India.`, '07/08/2008', '26/07/2011'],
      "4": ['Sr. Lecturer', `Rama Institute of Engineering and Technology, Kanpur, U.P., India.`, '03/09/2007', '06/08/2008'],
      "5": ['Lecturer', `Azad Institute of Engineering and Technology, Lucknow, U.P., India.`, '18/08/2005', '01/09/2007'],
      "6": ['Lecturer', `Jawahar Lal Nehru Polytechnic, Mahmudabad, Sitapur, U.P., India.`, '01/09/2003', '17/08/2005'],
      "7": ['Visiting Faculty', `QRAT a Computer Group, Lucknow, U.P., India.`, '03/07/2002', '30/08/2003']}
    }
  };

  createTable = (tableArr) => {
    let contentItem = '';
    let table = '<table border="1" class="fw center m50"><tr>';
    let tblHeadContent = '';
    let tblBodyMainContent = '';
    for(var i=0; i <= tableArr.thead.length-1; i++) { 
      let tblHead = [];
      tblHead[i] = '<th>'+tableArr.thead[i]+'</th>';
      tblHeadContent += tblHead[i];
    } 
    for (const j in tableArr.tbody) {
      let tblBodyContent = '<tr>';
      let tblBodyArr = [];
      tblBodyArr = tableArr.tbody[j];
      for(var k=0; k <= tblBodyArr.length-1; k++) { 
        let tblBody = [];
        tblBody[k] = '<td>'+tblBodyArr[k]+'</td>';
        tblBodyContent += tblBody[k];
      }
      tblBodyMainContent += tblBodyContent;
    }
    contentItem = table + tblHeadContent + '</tr>' + tblBodyMainContent + '</tr>' + '</tr></table>';
    return contentItem;
  }

  getContentItem = (contentName) => {
    let contentItem = '';
    if (contentName === 'home') {
      let mainItems = `
        <div class="imgSection">
          <Image src={alok} width="500" height="500"/>
        </div>
        <div class="detailSection fw">
      `;
      let profDetails = this.state.profDetails;
      for(const i in profDetails) {
        let subItems = [];
        subItems[i] = `
          <div class="fw flex content`+i+`">
            <div class="headContent cont`+i+`">`+i+`</div>
            <div class="detailcontent cont`+i+`">`+profDetails[i]+`</div>
          </div>
        `;
        contentItem += subItems[i];
      }
      contentItem = mainItems + contentItem + '</div>';
    } else if (contentName === 'about') {
      let mainItems = `
        <div class="imgSection">
          <Image src={alok} width="500" height="500"/>
        </div>
        <div class="detailSection fw">
      `;
      let profDetails = this.state.profDetails;
      for(const i in profDetails) {
        let subItems = [];
        subItems[i] = `
          <div class="fw flex content`+i+`">
            <div class="headContent cont`+i+`">`+i+`</div>
            <div class="detailcontent cont`+i+`">`+profDetails[i]+`</div>
          </div>
        `;
        contentItem += subItems[i];
      }
      contentItem = mainItems + contentItem + '</div>';  
    } else if (contentName === 'cv') {
      contentItem = `
      <div class="fw center">
          <span>Welcome to CV Page</span>
      </div>
      `;
    } else if (contentName === 'publications') { 
      contentItem = this.createTable(this.state.eduQul);
    } else if (contentName === 'research') {
      contentItem = this.createTable(this.state.resList);
    } else if (contentName === 'teaching') {
      contentItem = this.createTable(this.state.teachExp);
    } else if (contentName === 'links') {
      contentItem = `
        <div class="fw center">
            <span>Welcome to links Page</span>
        </div>
      `;
    }
    return contentItem;
  }

  navClickHandler = (event) => {
    let contentName = event.target.getAttribute("data-content");
    let contentPlace = document.getElementById('mainContent');
    var elems = document.querySelectorAll(".active");
    [].forEach.call(elems, function(el) {
      el.classList.remove("active");
    });
    event.target.className = "active";
    let contentItemtoShow = this.getContentItem(contentName);
    contentPlace.innerHTML = contentItemtoShow;
  }

  render() {       
    return (
      <div className="App">
        <div className="fw">
          <Header profName={this.state.profName} />
        </div>
        <div className="flex fw">
          <div className="flex NavContent">
            <Navigation onclick={this.navClickHandler.bind(this)}/>
          </div>
          <div className="flex mainContent" id="mainContent">
              <div className="fw center">
                  <span>Welcome to Home Page</span>
              </div>
          </div>
        </div>
      </div>
    );
  };
}

export default App;