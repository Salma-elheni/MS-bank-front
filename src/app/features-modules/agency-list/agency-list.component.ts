import { Component, OnInit } from '@angular/core';
import { Agency } from '../../core/models/agency.model';
import { AgencyService } from '../../core/services/agency.service';

@Component({
  selector: 'app-agency-list',
  templateUrl: './agency-list.component.html',
  styleUrls: ['./agency-list.component.css']
})
export class AgencyListComponent implements OnInit {
  agencies: Agency[];

  constructor(private agencyService: AgencyService) { }

  ngOnInit(): void {
    this.loadAgencies();
  }

  loadAgencies(): void {
    this.agencyService.getAllAgencies()
      .subscribe(agencies => {
        this.agencies = agencies;
      });
  }

  deleteAgency(id: number): void {
    this.agencyService.deleteAgency(id)
      .subscribe(() => {
        // Refresh agency list after deletion
        this.loadAgencies();
      });
  }
  updateAgency(agency: Agency): void {
    this.agencyService.updateAgency(agency.id, agency)
      .subscribe(updatedAgency => {
        this.loadAgencies();
      });
  }
}
