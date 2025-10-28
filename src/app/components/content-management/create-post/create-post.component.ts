import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CarouselModule } from 'primeng/carousel';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';
import { FormsModule } from '@angular/forms';
import { Select } from 'primeng/select';
import { BadgeModule } from 'primeng/badge';
import { OverlayBadgeModule } from 'primeng/overlaybadge';
import { CheckboxModule } from 'primeng/checkbox';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { AccordionModule } from 'primeng/accordion';

@Component({
  selector: 'app-create-post',
  imports: [
    CommonModule,
    CarouselModule,
    ButtonModule,
    TagModule,
    FormsModule,
    Select,
    BadgeModule,
    OverlayBadgeModule,
    CheckboxModule,
    CardModule,
    AccordionModule,
  ],
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css'],
})
export class CreatePostComponent implements OnInit {
  @ViewChild('fileInput') fileInput!: ElementRef<HTMLInputElement>;

  responsiveOptions: any[] | undefined;
  countries: any;
  selectedCity: any;
  products = Array.from({ length: 12 }, () => ({
    image: 'bamboo-watch.jpg',
    date: '1/12/2025',
  }));

  cities = [
    { name: 'مكة', selected: false },
    { name: 'المدينة', selected: false },
    { name: 'جدة', selected: false },
    { name: 'الدمام', selected: false },
    { name: 'الاحساء', selected: false },
    { name: 'الخبر', selected: false },
    { name: 'ابها', selected: false },
    { name: 'المدينة المنورة', selected: false },
    { name: 'القطيف', selected: false },
    { name: 'الاحساء', selected: false },
  ];

  activePanel: any;
  branches = [
    { name: 'حي العليا شارع الملك فهد', selected: false },
    { name: 'حي العليا شارع الملك فهد', selected: false },
    { name: 'حي العليا شارع الملك فهد', selected: false },
    { name: 'حي العليا شارع الملك فهد', selected: false },
    { name: 'حي العليا شارع الملك فهد', selected: false },
    { name: 'حي العليا شارع الملك فهد', selected: false },
    { name: 'حي العليا شارع الملك فهد', selected: false },
    { name: 'حي العليا شارع الملك فهد', selected: false },
    { name: 'حي العليا شارع الملك فهد', selected: false },
    { name: 'حي العليا شارع الملك فهد', selected: false },
    { name: 'حي العليا شارع الملك فهد', selected: false },
    { name: 'حي العليا شارع الملك فهد', selected: false },
  ];

  ngOnInit() {
    this.countries = [
      { name: 'السعودية', code: 'KSA' },
      { name: 'الامارات', code: 'UAE' },
      { name: 'مصر', code: 'EG' },
      { name: 'قطر', code: 'QA' },
      { name: 'العراق', code: 'IQ' },
    ];
    this.selectedCity = this.countries[0];

    this.responsiveOptions = [
      {
        breakpoint: '1400px',
        numVisible: 4,
        numScroll: 1,
      },
      {
        breakpoint: '1199px',
        numVisible: 3,
        numScroll: 1,
      },
      {
        breakpoint: '767px',
        numVisible: 2,
        numScroll: 1,
      },
      {
        breakpoint: '575px',
        numVisible: 1,
        numScroll: 1,
      },
    ];
  }

  toggleCity(city: any) {
    city.selected = !city.selected;
  }

  isSelected(city: any): boolean {
    return city.selected;
  }

  selectAll() {
    this.cities.forEach((c) => (c.selected = true));
  }

  unselectAll() {
    this.cities.forEach((c) => (c.selected = false));
  }

  togglePanel() {
    this.activePanel = this.activePanel === '0' ? null : '0';
  }

  selectAllBranches() {
    this.branches.forEach((b) => (b.selected = true));
  }

  unselectAllBranches() {
    this.branches.forEach((b) => (b.selected = false));
  }

  get selectedCount() {
    return this.branches.filter((b) => b.selected).length;
  }

  get totalBranches() {
    return this.branches.length;
  }

  togglebranch(branch: any) {
    branch.selected = !branch.selected;
  }

  isSelectedBranch(branch: any): boolean {
    return branch.selected;
  }

  triggerFileInput() {
    this.fileInput.nativeElement.click();
  }

  onFileSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      console.log('✅ Selected file:', file.name);
    }
  }
}
