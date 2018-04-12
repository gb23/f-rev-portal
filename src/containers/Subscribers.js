import React, { Component } from 'react';
import { connect } from 'react-redux';
import Card from '../components/Card'
import { getSubscribers, createSubscriber, addName, addEmail, setSubscribers } from '../actions/subscribers';
import { filterStatus, makeArrayOfOptions } from '../actions/filters';
import Form from '../components/Form';
import Select from '../components/Select';
import Loading from '../components/Loading';

class Subscribers extends Component{
    constructor(props){
        super(props);
        this.list = [];
        this.ignoreLoading = false;
    }
    componentDidMount(){
        this.props.setSubscribers({})
        this.props.filterStatus("");
        this.props.getSubscribers(this.props.selectedId)
    }
    componentWillReceiveProps(nextProps){
        if (this.props.selectedId !== nextProps.selectedId){
            this.props.setSubscribers({})
            this.props.filterStatus("");
            this.props.getSubscribers(nextProps.selectedId);
            
        }
        else if(nextProps.filters.businessFranchise !== this.props.filters.businessFranchise){
            this.props.setSubscribers({})
            this.props.filterStatus("");
            this.ignoreLoading = true;
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
    handleInput = (event) => {
        const currentFormData = {...this.props.typedSubscriber, [event.target.name]: event.target.value}
        if (event.target.name === "name"){
            this.props.addName(currentFormData.name)
        }
        else if (event.target.name === "email"){
            this.props.addEmail(currentFormData.email)
        }
    }
    handleSubmit = () => {
        const subscriberObj = {
            "name": this.props.typedSubscriber.name,
            "email": this.props.typedSubscriber.email
        }
        
        this.props.createSubscriber(subscriberObj, this.props.selectedId);

        //reset form data
    }
    loading = () => {
        if (this.ignoreLoading){
            this.ignoreLoading = false;
            return "";
        }
        else {
            this.ignoreLoading = false;
            return <Loading key="-1" />;
        }
        
    }
    render(){
        return(
            <div className="fixRight" >
                
                {this.props.subscribers && Object.keys(this.props.subscribers).length !== 0 ? 
             
                    [<Select key="-1" 
                        label="Find a Subscriber by Status "
                        filter={this.props.filters.subscriberStatus} 
                        filterAction={this.handleFilterTypeChange} 
                        options={makeArrayOfOptions(this.props.subscribers, "status")}
                    />,
                    <Form key="-2"
                        handleInputChange={this.handleInput}
                        handleOnSubmit={this.handleSubmit}
                        name={this.props.name}
                        email={this.props.email}
                    />]
                    : (this.loading())
                }
                { this.props.subscribers && Object.keys(this.props.subscribers).length === 0 ? "" : this.list}
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return({
        subscribers: state.subscribers, 
        filters: state.filters,
        selectedId: state.selectedBusiness.id,
        typedSubscriber: state.typedSubscriber
    });
}
export default connect(mapStateToProps, {getSubscribers, filterStatus, addName, addEmail, createSubscriber, setSubscribers})(Subscribers);