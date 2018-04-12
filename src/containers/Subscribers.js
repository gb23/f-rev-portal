import React, { Component } from 'react';
import { connect } from 'react-redux';
import Card from '../components/Card'
import { getSubscribers } from '../actions/subscribers';
import { filterStatus, makeArrayOfOptions } from '../actions/filters';
import Form from '../components/Form';
import Select from '../components/Select';
import Loading from '../components/Loading';

class Subscribers extends Component{
    constructor(props){
        super(props);
        //this.id = props.id;
        this.list = [];
    }
    componentDidMount(){
        this.props.getSubscribers(this.props.selectedId)
    }
    componentWillReceiveProps(nextProps){
        if (nextProps.selectedId !== ""){
            if (this.props.selectedId !== nextProps.selectedId){
                this.props.getSubscribers(nextProps.selectedId);
                
            }
        }
        const filter = nextProps.filters.subscriberStatus
        this.list = this.siftCards(this.props.subscribers, filter, "status"); 
    }
    handleFilterTypeChange = event => {
        const filter = event.target.value;
        this.props.filterStatus(filter);
    }
    makeArrayOfCards = elements => {
        return elements.map(element => 
            <Card key={element.id}
                name={element.name}
                email={element.email} 
                status={element.status}
                onChoose={this.onCardSelect}
            />
        );
    }
    siftCards = (elements, filter, keyword)=>{
        let eles = [];
        if (filter !== ""){
            eles = elements.filter(ele => ele[keyword] === filter);
        }
        return this.makeArrayOfCards(eles);
    }
    onCardSelect = (event, id) => {
        console.log(id, "has been clicked");
    }
    render(){
        return(
            <div className="fixRight" >
                
                {this.props.subscribers ? 
                    <Select 
                        label="Find a Subscriber by Status "
                        filter={this.props.filters.subscriberStatus} 
                        filterAction={this.handleFilterTypeChange} 
                        options={makeArrayOfOptions(this.props.subscribers, "status")}
                    /> 
                    : <Loading key="-1" />
                }
                { this.list.length === 0 ? "" : this.list}
                { this.list.length === 0 ? "" : <Form/>}
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return({
        subscribers: state.subscribers, 
        filters: state.filters,
        selectedId: state.selectedBusiness.id
    });
}
export default connect(mapStateToProps, {getSubscribers, filterStatus})(Subscribers);