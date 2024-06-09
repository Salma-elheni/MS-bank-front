import { ClassGetter } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { AlertService } from 'src/app/core/services/alert.service';
import { PersonalService } from 'src/app/core/services/personal.service';

@Component({
  selector: 'app-personal-component',
  templateUrl: './personal-component.component.html',
  styleUrls: ['./personal-component.component.scss']
})
export class PersonalComponentComponent implements OnInit {
  constructor(private formBuilder: FormBuilder,
    private alertService: AlertService,
    private personalService:PersonalService,
    private router:Router,
    private route: ActivatedRoute
    
    ) { }

  form: FormGroup;

  loading = false;

  submitted = false;




  ngOnInit(): void {
    this.form = this.formBuilder.group({
      statut: ['', Validators.required],
      type: ['', Validators.required],
      object: ['', Validators.required],
  });
  }

  get f() { return this.form.controls; }

  onSubmit() {
    this.submitted = true;

    // reset alerts on submit
    this.alertService.clear();

    // stop here if form is invalid
    if (this.form.invalid) {
        return;
    }

    this.loading = true;
    this.personalService.register(this.form.value)
        .pipe(first())
        .subscribe(
            data => {
                this.alertService.success('Personal successful', { keepAfterRouteChange: true });
                this.loading = false;

            },
            error => {
                this.alertService.error(error);
                this.loading = false;
            });
}

}


