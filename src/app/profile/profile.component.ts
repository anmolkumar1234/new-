import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  selectedOption: string = 'profile'; // Default selected option
  userProfile: any = { 
    name: 'John Doe',
    email: 'john@example.com',
    dob: '1990-01-01',
    sex: 'Male',
    age: 30,
    pan: 'ABCPD1234F',
    balance: 1000,
    address: '123 Main St',
    city: 'Anytown',
    role: 'Donor',
    description: 'Lorem ipsum',
    created_at: '2022-01-01'
  }; // Example profile data
  editMode: any = {}; // Object to track edit mode for each field
  donations: any[] = ['Donation 1', 'Donation 2', 'Donation 3']; // Example donations data
  totalBalance: number = 1000; // Example total balance
  campaignData: any = {
    cause: '',
    title: '',
    description: '',
    goalAmount: null,
    startDate: null,
    endDate: null,
    beneficiaryName: '',
    beneficiaryAge: null,
    beneficiaryCity: '',
    beneficiaryMobile: ''
  };

  campaigns: any[] = []; // Array to store created campaigns
  editModeCampaign: any = null; // Variable to track which campaign is being edited

  showProfile() {
    this.selectedOption = 'profile';
  }

  showDonations() {
    this.selectedOption = 'donations';
  }

  showBalance() {
    this.selectedOption = 'balance';
  }

  showMyCampaigns() {
    this.selectedOption = 'myCampaigns';
  }

  toggleEditMode(field: string) {
    this.editMode[field] = !this.editMode[field];
  }

  saveChanges(field: string) {
    // Implement save changes logic here
    this.toggleEditMode(field);
  }

  cancelEdit(field: string) {
    // Implement cancel edit logic here
    this.toggleEditMode(field);
  }

  CreateCampaign() {
    this.selectedOption = 'CreateCampaign';
  }

  createCampaign() {
    // Add logic to handle form submission and campaign creation
    console.log('Campaign created with data:', this.campaignData);
    
    // Push the newly created campaign to the array of campaigns
    this.campaigns.push({
      cause: this.campaignData.cause,
      title: this.campaignData.title,
      description: this.campaignData.description,
      goalAmount: this.campaignData.goalAmount,
      startDate: this.campaignData.startDate,
      endDate: this.campaignData.endDate
    });

    // Reset the form after submission
    this.resetForm();

    // Switch back to the default view after campaign creation
    this.showMyCampaigns(); // Change to whichever default view you prefer
  }

  cancelCreateCampaign() {
    // Reset the form and switch back to the default view
    this.resetForm();
    this.showMyCampaigns(); // Change to whichever default view you prefer
  }

  resetForm() {
    // Reset campaign data
    this.campaignData = {
      cause: '',
      title: '',
      description: '',
      goalAmount: null,
      startDate: null,
      endDate: null,
      beneficiaryName: '',
      beneficiaryAge: null,
      beneficiaryCity: '',
      beneficiaryMobile: ''
    };
  }

  editCampaign(campaign: any) {
    // For demonstration, let's log the campaign data
    console.log('Editing campaign:', campaign);
    // You can implement navigation to a separate component for editing campaigns here
    // Alternatively, you can implement editing directly within this component
    this.editModeCampaign = campaign;
  }

  saveEditedCampaign(campaign: any) {
    // Implement logic to save edited campaign details
    console.log('Edited campaign:', campaign);
    this.editModeCampaign = null; // Reset edit mode after saving
  }
  
  cancelEditCampaign() {
    this.editModeCampaign = null; // Reset edit mode without saving
  }
  

  deleteCampaign(campaign: any) {
    // Add logic to delete a campaign
    const index = this.campaigns.indexOf(campaign);
    if (index !== -1) {
      this.campaigns.splice(index, 1);
    }
  }
}
