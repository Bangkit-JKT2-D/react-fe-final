import React from "react";
import { connect } from "react-redux";

import { HomeContainer } from "./style";
import Uploader from "../../components/Uploader";
import Modal from "../../components/Modal";
import Loading from "../../components/Loading";

class Home extends React.Component {
  render() {
    const { res, loading } = this.props;
    return (
      <HomeContainer>
        <Modal show={loading}>
          <Loading text="Wait a second, Predicting the Image..." />
        </Modal>
        <div>
          <h1 className="text-center">Is your fruit fresh or not?</h1>
        </div>
        <Uploader />
        <div className="flex full center">
          <h1>{res && `Your image is a ${res}`}</h1>
        </div>
      </HomeContainer>
    );
  }
}

Home.propTypes = {};

function mapStateToProps(state) {
  console.log(state);
  return {
    loading: state.predict.loading,
    res: state.predict.msg
  };
}

function mapDispatchToProps(dispatch) {
  return {
    dispatch
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
