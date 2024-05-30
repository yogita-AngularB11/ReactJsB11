import React from 'react';

const Herosection = () => {
  const keyPressedInSearch = (event) => {
    // Implement the function to handle key press in search input
    console.log('Key pressed:', event.key);
  };

  const findSearchResults = (element) => {
    // Implement the function to handle input in search input
    console.log('Input changed:', element.value);
  };

  const clickLearntocodeSearchBtn = () => {
    // Implement the function to handle search button click
    console.log('Search button clicked');
  };

  return (
    <div className="ws-black w3-center herosection">
      <div className="w3-content learntocodecontent" style={{ maxWidth: '1400px' }}>
        <h1 className="learntocodeh1">Learn to Code</h1>
        <h3 className="learntocodeh3">
          <i 
            className="fa fa-logo w3-hide" 
            style={{
              color: '#FFC0C7',
              marginRight: '20px',
              zIndex: 1,
              fontSize: '36px',
              verticalAlign: 'bottom'
            }}
          ></i>
          With the world's largest web developer site.
        </h3>
        <br />
        <form className="example" action="/action_page.php" style={{ margin: 'auto', maxWidth: '500px' }}>
          <input
            type="text"
            placeholder="Search our tutorials, e.g. HTML"
            id="search2"
            className="ga-fp"
            autoComplete="off"
            onKeyDown={keyPressedInSearch}
            onInput={(e) => findSearchResults(e.target)}
            onFocus={(e) => findSearchResults(e.target)}
          />
          <button type="button" id="learntocode_searchbtn" onClick={clickLearntocodeSearchBtn}>
            <i id="learntocode_searchicon" className="fa fa-search ga-fp"></i>
          </button>
          <div id="listofsearchresults"></div>
        </form>
        <h4 className="learntocodeh4">
          <a href="where_to_start.asp" className="ga-fp">Not Sure Where To Begin?</a>
        </h4>
      </div>
    </div>
  );
};

export default Herosection;
