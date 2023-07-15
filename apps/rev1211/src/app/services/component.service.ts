import { Injectable } from '@angular/core';
import {
  SprintDayEntity, SprintEntity,
  StickyEntity,
  UserProfileEntity
} from "@rev1211/data-access";
import * as Module from "module";

@Injectable({
  providedIn: 'root'
})
export class ComponentService {

  private currentSprint:SprintEntity;

  constructor() {
    this.currentSprint = {};
  }

  setCurrentSprint(sprint:SprintEntity): any {
    this.currentSprint = sprint;
  }

  getCurrentSprintID(): string | undefined {
    return this.currentSprint?.id as string | undefined;
  }

  getCurrentFacilitators(): Array<UserProfileEntity> {
    return this.currentSprint?.attributes?.facilitators?.data as Array<UserProfileEntity>;
  }

  getCurrentSponsors(): Array<UserProfileEntity> {
    return this.currentSprint?.attributes?.sponsors?.data as Array<UserProfileEntity>;
  }

  getCurrentSprinters(): Array<UserProfileEntity> {
    return this.currentSprint?.attributes?.sprinters?.data as Array<UserProfileEntity>;
  }

  getCurrentSprintDays(): Array<SprintDayEntity> | undefined {
    return this.currentSprint?.attributes?.sprint_days.data as Array<SprintDayEntity> | undefined;
  }

  getCurrentModuleID(): string | undefined {
    return this.currentSprint?.attributes?.module?.data?.id as string | undefined;
  }

  getCurrentModule(): Module | undefined {
    return this.currentSprint?.attributes?.module?.data?.attributes as Module | undefined;
  }

  getCurrentStickies(index:number): Array<StickyEntity> | undefined {
    return this.currentSprint?.attributes?.module?.data?.attributes?.module_days?.data.at(index)?.attributes?.stickies.data as Array<StickyEntity> | undefined;
  }

  getCurrentSprint(): SprintEntity | undefined {
    return this.currentSprint as SprintEntity | undefined;
  }
}
