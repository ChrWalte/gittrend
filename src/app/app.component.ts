import { Component, OnInit } from '@angular/core';
import { faStar } from '@fortawesome/free-regular-svg-icons';
import { faCodeBranch } from '@fortawesome/free-solid-svg-icons';
import { GitService } from './git.service';
import { IGitTrending } from './IGitTrending';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  faStar = faStar;
  faCodeBranch = faCodeBranch;

  gitTrendingRepos!: IGitTrending[];

  constructor(private gitService: GitService) {}
  ngOnInit(): void {
    this.getGitTrendingRepos();
  }

  private getGitTrendingRepos(): void {
    this.gitService.getTopTrending().subscribe((response) => {
      this.gitTrendingRepos = response;
    });
  }
}
