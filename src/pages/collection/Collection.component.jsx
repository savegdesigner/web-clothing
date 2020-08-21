import React from "react";

import CollectionItem from "../../components/colletion-item/CollectionItem.component";

import { connect } from "react-redux";
import { selectCollection } from "../../redux/shop/shop.selectors";

import "./category.styles.scss";

const CollectionPage = ({ collection }) => {
  return (
    <div className="collection-page">
      <h2>Category Page</h2>
    </div>
  );
};

const mapStateToprops = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state),
});

export default connect(mapStateToprops)(CollectionPage);
