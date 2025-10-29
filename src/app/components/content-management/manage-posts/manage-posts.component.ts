import {
  ChangeDetectorRef,
  Component,
  HostListener,
  inject,
  OnInit,
  PLATFORM_ID,
} from '@angular/core';
import { DividerModule } from 'primeng/divider';
import { ChartModule } from 'primeng/chart';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { ListboxModule } from 'primeng/listbox';
import { FormsModule } from '@angular/forms';
import { Select } from 'primeng/select';
import { MultiSelectModule } from 'primeng/multiselect';
import { PaginatorModule, PaginatorState } from 'primeng/paginator';


@Component({
  selector: 'app-manage-posts',
  imports: [DividerModule, ChartModule, ListboxModule, FormsModule,
    CommonModule,
    Select,
    MultiSelectModule,
    PaginatorModule
  ],
  templateUrl: './manage-posts.component.html',
  styleUrl: './manage-posts.component.css',
})
export class ManagePostsComponent implements OnInit {
  @HostListener('document:click', ['$event'])

  data1: any;
  data2: any;
  options1: any;
  options2: any;
  platformId = inject(PLATFORM_ID);
  selectedCity:any;
  selectedCountry:any;
  selectedBranches: any[] = [];
  showListBox = false;
  selectedFilter: any;
  first: number = 0;   
  rows: number = 30; 

  constructor(private cd: ChangeDetectorRef) {}


  filters = [
    { name: 'يومي' },
    { name: 'اسبوعي' },
    { name: 'شهري' },
    { name: 'سنوي' },
  ];
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
  countries = [
      { name: 'السعودية', code: 'KSA' },
      { name: 'الامارات', code: 'UAE' },
      { name: 'مصر', code: 'EG' },
      { name: 'قطر', code: 'QA' },
      { name: 'العراق', code: 'IQ' },
  ];
  branches = [
  { name: 'فرع العليا - شارع الملك فهد', selected: false },
  { name: 'فرع النخيل - طريق الإمام سعود', selected: false },
  { name: 'فرع الروضة - شارع خالد بن الوليد', selected: false },
  { name: 'فرع اليرموك - شارع الدمام', selected: false },
  { name: 'فرع الصحافة - طريق الملك عبدالعزيز', selected: false },
  { name: 'فرع المروج - طريق الأمير تركي الأول', selected: false },
  { name: 'فرع العزيزية - طريق الحائر', selected: false },
  { name: 'فرع النسيم - شارع حمزة بن عبدالمطلب', selected: false },
  { name: 'فرع الربيع - طريق الثمامة', selected: false },
  { name: 'فرع الملقا - طريق أنس بن مالك', selected: false },
  { name: 'فرع النخيل مول - الدور الأرضي', selected: false },
  { name: 'فرع الريان - شارع الإمام الشافعي', selected: false }
  ];
  
  products = Array.from({ length: 90 }, (_, i) => ({
    id: i + 1,
    image: 'bamboo-watch.jpg',
    date: '1/12/2025',
  }));  

  ngOnInit(): void {
    this.initChart();
    this.selectedCity = this.cities[0];
    this.selectedCountry = this.countries[0];
  }

  get paginatedProducts() {
    return this.products.slice(this.first, this.first + this.rows);
  }

  onPageChange(event: PaginatorState) {
    this.first = event.first ?? 0;
    this.rows = event.rows ?? 30;
  }


  initChart() {
    if (isPlatformBrowser(this.platformId)) {
      const documentStyle = getComputedStyle(document.documentElement);

      this.data1 = {
        labels: ['JAN', 'APR', 'JUL', 'OCT', 'DEC'],
        datasets: [
          {
            label: '', 
            data: [12, 19, 15, 22, 18],
            borderColor: '#3B82F6',
            backgroundColor: '#f2f7fe',
            fill: true,
            tension: 0.4,
            borderWidth: 2,
            pointRadius: 2,
            pointBackgroundColor: '#3B82F6',
            pointBorderWidth: 2,
            pointHoverRadius: 6,
          },
        ],
      };

      this.options1 = {
        maintainAspectRatio: false,
        plugins: {
          legend: { display: false },
          tooltip: {
            enabled: true,
            displayColors: false, 
            backgroundColor: '#fff',
            titleColor: '#000',
            bodyColor: '#000',
            borderColor: '#e5e7eb',
            borderWidth: 1,
            titleFont: { weight: 'bold' },
            padding: 6,
            callbacks: {
              title: () => '', 
              label: (context: any) => {
                return `${context.parsed.y}`; 
              },
            },
          },
        },
        scales: {
          x: {
            grid: { display: false, drawBorder: false },
            ticks: {
              color: '#000', 
              font: { size: 12 },
            },
          },
          y: {
            display: false, 
          },
        },
      };

      this.data2 = {
        labels: [
          'JAN',
          'FEB',
          'MAR',
          'APR',
          'MAY',
          'JUN',
          'JUL',
          'AUG',
          'SEP',
          'OCT',
          'NOV',
          'DEC',
        ],
        datasets: [
          {
            label: '', 
            data: [
              500, 800, 1200, 2900, 1800, 2500, 2700, 2100, 2670, 1000, 2800,
              2900,
            ],
            borderColor: '#3B82F6',
            backgroundColor: 'rgba(59, 130, 246, 0.15)',
            fill: false,
            tension: 0.4,
            borderWidth: 2,
            pointRadius: 3,
            pointBackgroundColor: '#3B82F6',
            pointBorderWidth: 1,
            pointHoverRadius: 4,
          },
        ],
      };

      this.options2 = {
        maintainAspectRatio: false,
        plugins: {
          legend: { display: false },
          tooltip: {
            enabled: true,
            displayColors: false,
            backgroundColor: '#fff',
            titleColor: '#000',
            bodyColor: '#000',
            borderColor: '#e5e7eb',
            borderWidth: 1,
            titleFont: { weight: 'bold' },
            padding: 6,
            callbacks: {
              title: () => '', 
              label: (context: any) => {
                return `${context.parsed.y}`; 
              },
            },
          },
        },
        scales: {
          x: {
            grid: { display: false, drawBorder: false },
            ticks: {
              color: '#000',
              font: { size: 12 },
            },
          },
          y: {
            position: 'right',
            beginAtZero: true,
            min: 0,
            max: 3000, 
            ticks: {
              stepSize: 1000, 
              color: '#000',
              font: { size: 12 },
              callback: (value: number) => `${value / 1000}k`,
            },
            grid: {
              color: '#e5e7eb',
              drawBorder: false,
            },
          },
        },
      };

      this.cd.markForCheck();
    }
  }

  toggleListBox(event: MouseEvent) {
    event.stopPropagation();
    this.showListBox = !this.showListBox;
  }

  closeListBox() {
    this.showListBox = false;
  }

  onDocumentClick(event: MouseEvent) {
    this.showListBox = false;
  }

  onSelectBranches(event: any) {
  console.log('Selected branches:', this.selectedBranches);
}

removeBranch(branch: any) {
  this.selectedBranches = this.selectedBranches?.filter(b => b !== branch);;
}
}
