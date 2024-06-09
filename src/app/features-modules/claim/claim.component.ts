import { ClassGetter } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { AlertService } from 'src/app/core/services/alert.service';
import { RequestService } from 'src/app/core/services/request.service';

@Component({
  selector: 'app-claim',
  templateUrl: './claim.component.html',
  styleUrls: ['./claim.component.scss']
})
export class ClaimComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,
    private alertService: AlertService,
    private requestService:RequestService,
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
    this.requestService.register(this.form.value)
        .pipe(first())
        .subscribe(
            data => {
                this.alertService.success('Registration successful', { keepAfterRouteChange: true });
                this.loading = false;

            },
            error => {
                this.alertService.error(error);
                this.loading = false;
            });
}

}


