import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'registrar',
    loadChildren: () => import('./registrar/registrar.module').then( m => m.RegistrarPageModule)
  },
  {
    path: 'endereco-empresa',
    loadChildren: () => import('./user_logged/endereco-empresa/endereco-empresa.module').then( m => m.EnderecoEmpresaPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./user_logged/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'view-comanda',
    loadChildren: () => import('./user_logged/view-comanda/view-comanda.module').then( m => m.ViewComandaPageModule)
  },
  {
    path: 'create-pedido',
    loadChildren: () => import('./user_logged/create-pedido/create-pedido.module').then( m => m.CreatePedidoPageModule)
  },
  {
    path: 'bebidas',
    loadChildren: () => import('./user_logged/produtos/bebidas/bebidas.module').then( m => m.BebidasPageModule)
  },
  {
    path: 'comidas',
    loadChildren: () => import('./user_logged/produtos/comidas/comidas.module').then( m => m.ComidasPageModule)
  },
  {
    path: 'inserir-produtos',
    loadChildren: () => import('./user_logged/inserir-produtos/inserir-produtos.module').then( m => m.InserirProdutosPageModule)
  },
  {
    path: 'perfil',
    loadChildren: () => import('./user_logged/users/perfil/perfil.module').then( m => m.PerfilPageModule)
  },  {
    path: 'view-produtos',
    loadChildren: () => import('./user_logged/produtos/view-produtos/view-produtos.module').then( m => m.ViewProdutosPageModule)
  },







];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
