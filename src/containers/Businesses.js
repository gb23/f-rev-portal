import React, { Component } from 'react';
import { connect } from 'react-redux';
import Card from '../components/Card';
import Subscribers from '../containers/Subscribers';
import { getBusinesses, selectBusiness } from '../actions/businesses';
import { filterFranchise, makeArrayOfOptions } from '../actions/filters';
//import { siftCards, onCardSelect } from '../actions/cards';
import Select from '../components/Select';
import Loading from '../components/Loading';

class Businesses extends Component{
    constructor(props){
        super(props);
        this.list = [];
    }
    componentDidMount(){
        this.props.getBusinesses()
    }
    componentWillReceiveProps(nextProps){
        const filter = nextProps.filters.businessFranchise
        this.list = this.siftCards(this.props.businesses, filter, "franchise");
    }
    handleFilterTypeChange = event => {
        const filter = event.target.value;
        this.props.filterFranchise(filter);
        if (filter === ""){
            this.props.selectBusiness("");
        }     
    }
    makeArrayOfCards = elements => {
        return elements.map(element =>
            <Card
                highlight={ element.id === this.props.selectedId ? "highlight" : ""} 
                key={element.id}
                name={element.name}
                cents={element.revenue_to_date_in_cents}
                franchise={element.franchise} 
                status={element.status}
                onChoose={this.onCardSelect}
                id = {element.id}
            />
        );
    }
    onCardSelect = (event, id) => {
        if(!this.props.subscribers || this.props.subscribers.length !== 0){
            console.log(id, "has been clicked");
            this.props.selectBusiness(id);

        }
            
        
    
    }
    siftCards = (elements, filter, keyword)=>{
        let eles = [];
        if (filter !== ""){
            eles = elements.filter(ele => ele[keyword] === filter);
        }
        return this.makeArrayOfCards(eles);
    }
    statusMessage = () => {
        return <Loading key="-1" />
    }
    render(){
        //debugger;
        return(
           
            
          
            <div className="pl4 fl w-third pa2">
                {/* <div class="outline bg-white pv4"> */}
                {this.props.businesses ? 
                    <Select
                        label="Find BUSINESSES by Franchise "
                        filter={this.props.filters.businessFranchise} 
                        filterAction={this.handleFilterTypeChange} 
                        options={makeArrayOfOptions(this.props.businesses, "franchise")}
                        load={this.props.subscribers}
                    /> 
                    : this.statusMessage()
                }
                <div className="pt5">
                { this.list.length === 0 ? "" : this.list}
                { this.props.filters.businessFranchise !== "" && this.props.selectedId > 0 ?  <Subscribers/> : "" }
                </div>
                {/* </div> */}
            </div>
     
        );
    }
}
const mapStateToProps = (state) => {
    return({
        selectedId: state.selectedBusiness.id,
        businesses: state.businesses, 
        filters: state.filters,
        subscribers: state.subscribers
    });
}
export default connect(mapStateToProps, {getBusinesses, filterFranchise, selectBusiness})(Businesses);
