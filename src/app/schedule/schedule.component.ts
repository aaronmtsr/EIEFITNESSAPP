import { Component, OnInit, ɵɵProvidersFeature } from '@angular/core';
import { DayService, WeekService, WorkWeekService, MonthService, AgendaService,MonthAgendaService, TimelineViewsService, TimelineMonthService } from '@syncfusion/ej2-angular-schedule';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
  // providers: [DayService, WeekService, WorkWeekService, MonthService, AgendaService, MonthAgendaService, TimelineViewsService, TimelineMonthService]
  // template: `<ejs-schedule> </ejs-schedule>`
})
export class ScheduleComponent implements OnInit {
  public minDate: Date = new Date ("06/20/2021");
  public maxDate: Date = new Date ("06/20/2027");
  public value: Date = new Date ("06/24/2021");

  constructor() { }

  ngOnInit(): void {
  }

}
