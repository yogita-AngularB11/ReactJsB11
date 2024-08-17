
import React from 'react';

class UserProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.name,
      age: props.age
    };
  }

  // Example: Only update if name or age props change
  shouldComponentUpdate(nextProps, nextState) {
    // Compare current props and next props
    if (this.props.name !== nextProps.name || this.props.age !== nextProps.age) {
      return true; // Re-render component
    }
    return false; // Do not re-render component
  }

  render() {
    const { name, age } = this.props;
    console.log('Inside UserProfileComp')
    return (
        
      <div>
        <h2>User Profile</h2>
        <p>Name: {name}</p>
        <p>Age: {age}</p>
      </div>
    );
  }
}

export default UserProfile;
