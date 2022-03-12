import { FindexService } from './../../services/findex.service';
import { AuthService } from 'src/app/services/auth.service';
import { Findex } from './../../models/findex';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-findex',
  templateUrl: './findex.component.html',
  styleUrls: ['./findex.component.css'],
})
export class FindexComponent implements OnInit {
  findexScore: Findex[] = [];
  constructor(
    public authService: AuthService,
    private findexService: FindexService
  ) {}

  ngOnInit(): void {
    this.getFindexScoreByUserId(this.authService.userId);
  }

  getFindexScoreByUserId(userId: number) {
    console.log(userId);
    this.findexService.getFindexScoreByUserId(userId).subscribe((response) => {
      console.log(response);
      this.findexScore = response.data;
    });
  }
}
