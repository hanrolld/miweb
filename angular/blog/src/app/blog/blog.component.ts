import { Component, HostListener, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { InactivyServiceService } from '../inativityService.service';
import { ScrollService } from '../scroll.service';


@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
username: any;
isScrolledToBottom: boolean = false;

  constructor(private router: Router, private inactivityService: InactivyServiceService, private ScrollService: ScrollService) {}

  ngOnInit() {
    this.inactivityService.resetTimer();
  }

  logout() {
    localStorage.removeItem('usuario');
    this.router.navigate(['/login']);
  }

  usuario: string | null = localStorage.getItem('usuario');
  
}
