import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutusComponent } from 'src/app/components/aboutus/aboutus.component';
import { BannerComponent } from 'src/app/components/banner/banner.component';
import { ServicesComponent } from 'src/app/components/services/services.component';
import { CalltoComponent } from 'src/app/components/callto/callto.component';
import { ChooseusComponent } from 'src/app/components/chooseus/chooseus.component';
import { TestimonialsComponent } from 'src/app/components/testimonials/testimonials.component';
import { PortfolioComponent } from 'src/app/components/portfolio/portfolio.component';
import { TeamComponent } from 'src/app/components/team/team.component';
import { ClientsComponent } from 'src/app/components/clients/clients.component';
import { PricingComponent } from 'src/app/components/pricing/pricing.component';
import { FaqComponent } from 'src/app/components/faq/faq.component';
import { FooterComponent } from 'src/app/components/footer/footer.component';
import { ContactusComponent } from 'src/app/components/contactus/contactus.component';
import { HeaderComponent } from 'src/app/components/header/header.component';
import { PageComponent } from '../page.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [ AboutusComponent,
    PageComponent,
    BannerComponent,
    ServicesComponent,
    ChooseusComponent,
    CalltoComponent,
    PortfolioComponent,
    TestimonialsComponent,
    TeamComponent,
    ClientsComponent,
    PricingComponent,
    FaqComponent,
    ContactusComponent,
    FooterComponent,
    HeaderComponent],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class HomeModule { }
