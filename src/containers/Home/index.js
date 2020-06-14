import React from "react";
import { connect } from "react-redux";

import { HomeContainer } from "./style";
import Uploader from "../../components/Uploader";

class Home extends React.Component {
  render() {
    return (
      <HomeContainer>
        <div>
          <h1 className="text-center">Is your fruit fresh or not?</h1>
        </div>
        <Uploader />
      </HomeContainer>
    );
  }
}

Home.propTypes = {};

function mapDispatchToProps(dispatch) {
  return {
    dispatch
  };
}

export default connect(null, mapDispatchToProps)(Home);
