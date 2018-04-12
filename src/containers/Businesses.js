import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getBusinesses } from '../actions/businesses';
import { filterFranchise } from '../actions/filters';
//import { makeArrayOfCards } from '../actions/makeCards';
import Card from '../components/Card';
import Select from '../components/Select';

import Loading from '../components/Loading';

class Businesses extends Component{
    componentDidMount(){
        this.props.getBusinesses();
    }
    makeArrayOfCards(elements) {
        return elements.map(element => 
            <Card key={element.id}
                name={element.name}
                cents={element.revenue_to_date_in_cents}
                franchise={element.franchise} 
                status={element.status}
            />
        );
    }
    makeArrayOfOptions(objectArray, keyword) {
        let set = new Set();
        objectArray.forEach(obj => set.add(obj[keyword]))
        set = ["",...set];

        return set.map(val => <option key={val}>{val}</option>)

    }
    handleFilterTypeChange = event => {
        //debugger;
        const filter = event.target.value;
        this.props.filterFranchise(filter);
    }
    render(){
        return(
            <div>
                
                {this.props.businesses ? 
                    <Select 
                        filter={this.props.filter} 
                        filterAction={this.handleFilterTypeChange} 
                        options={this.makeArrayOfOptions(this.props.businesses, "franchise")}
                    /> 
                    : <Loading key="-1" />
                }
                {this.props.businesses ? this.makeArrayOfCards(this.props.businesses) : ""}
                Businesses!!!  
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return({
        businesses: state.businesses,
        filter: state.filters.businessFranchise
    });
}
export default connect(mapStateToProps, {getBusinesses, filterFranchise})(Businesses);
//makeArrayOfCards