import { Component, OnInit } from '@angular/core';
import { Bubble } from '../bubble';
import { ParentBubble } from '../parentBubble';
import { BUBBLES } from '../mock-bubbles';
import { SearchService } from '../search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  parentBubbles = BUBBLES;
  childBubbles = [];
  
  constructor(private searchService : SearchService) { }

  ngOnInit() {
  }

  isChecked(parent: ParentBubble): boolean {
    return parent.checked;
  }
  
  onClickParentBubble(parent:ParentBubble): void {
  	parent.checked = !parent.checked;
  	this.childBubbles = parent.children;
  }

  onClickChild(child:Bubble): void {
  	child.checked = !child.checked;
    this.saveToArray(child);
  }

  clear(): void {
  	var emptyArray = [];
	this.searchService.setSearchArray(emptyArray);
  	console.log(this.searchService.getSearchArray());
  	
  }

  saveToArray(item:Bubble): void {
  	this.searchService.getSearchArray().push(item.name);
  	console.log(this.searchService.getSearchArray());
  }
}
