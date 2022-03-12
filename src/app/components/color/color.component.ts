import { ActivatedRoute } from '@angular/router';
import { ColorService } from './../../services/color.service';
import { Color } from './../../models/color';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css'],
})
export class ColorComponent implements OnInit {
  colors: Color[] = [];
  currentColor: Color;
  filterText = '';
  constructor(
    private colorService: ColorService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getColors();
  }

  getColors() {
    this.colorService.getColors().subscribe((response) => {
      this.colors = response.data;
    });
  }

  getColorsById(colorId: number) {
    this.colorService.getColorsById(colorId).subscribe((response) => {
      this.colors = response.data;
    });
  }

  setCurrentColor(color: Color) {
    this.currentColor = color;
  }

  getCurrentColorClass(color: Color) {
    if (color == this.currentColor) {
      return 'option-group-item active';
    } else {
      return 'option-group-item';
    }
  }

  getAllColorClass() {
    if (!this.currentColor) {
      return 'option-group-item active';
    } else {
      return 'option-group-item';
    }
  }
}
