import {Injectable} from '@angular/core';
import {ToolModel} from '../models/tool.model';

@Injectable()
export class ToolsService {
  toolsList: ToolModel[] = [
    {
      name: 'Lorem dolor sit amet',
      details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod incididunt ut labore ' +
      'et dolore magna aliqua. Ut enim ad minimtation ullamco laboris nisi aliquip ex ' +
      'ea commodo consequat.',
      image: '../../assets/logo/logo-2.png',
      favorite: false,
      category: 'c1'
    },
    {
      name: 'Lorem ipsum',
      details: 'Lorem ipsum dolor sit amet, tempor incididunt ut labore.',
      image: '../../assets/logo/logo-4.png',
      favorite: false,
      category: 'c2'
    },
    {
      name: 'Lorem ipsum dolor',
      details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, incididunt ut labore.',
      image: '../../assets/logo/logo-6.png',
      favorite: false,
      category: 'c1'
    },
    {
      name: 'Consectetur elit',
      details: 'Consectetur consectetur adipiscing elit adipiscing elit, sed do eiusmod tempor incididunt ' +
      'ut labore, ad sed do eiusmod minimtation ullamco.',
      image: '../../assets/logo/logo-8.png',
      favorite: false,
      category: 'c1'
    },
    {
      name: 'Duis voluptate',
      details: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
      image: '../../assets/logo/logo-10.png',
      favorite: false,
      category: 'c2'
    },
    {
      name: 'Duis eu con adipsc elit si in adipiscing elit',
      details: 'Duis dolore nulla.',
      image: '../../assets/logo/logo-1.png',
      favorite: false,
      category: 'c1'
    },
    {
      name: 'Excepteur sint occaecat cupidatat',
      details: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est ' +
      'laborum. Duis aute irure dolor in reprehenderit in voluptate velit esse. Lorem ipsum dolor sit amet, consectetur ' +
      'adipiscing elit, sed do eiusmod tempor incididunt ut labore. Duis aute irure dolor in reprehenderit. ' +
      'Excepteur sint occaecat cupidatat non proident.',
      image: '../../assets/logo/logo-3.png',
      favorite: false,
      category: 'c2'
    },
    {
      name: 'Duiduptate',
      details: 'Duis dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
      image: '../../assets/logo/logo-5.png',
      favorite: false,
      category: 'c1'
    },
    {
      name: 'Irure dolor in reprehenderit irure dolor in repreh',
      details: 'Duis aute irure dolor in ruis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore ' +
      'eu fugiat nulla pariatur.',
      image: '../../assets/logo/logo-7.png',
      favorite: false,
      category: 'c2'
    },
    {
      name: 'Excepnt occaecat cupidatat',
      details: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est ' +
      'laborum. Duis aute irure dolor in reprehenderit in voluptate velit esse. Lorem ipsum dolor sit amet, consectetur ' +
      'adipiscing elit, sed do eiusmod tempor incididunt ut labore. Duis aute irure dolor in reprehenderit. ' +
      'Excepteur sint occaecat cupidatat non proident.',
      image: '../../assets/logo/logo-9.png',
      favorite: false,
      category: 'c1'
    },
    {
      name: 'Axcedatat',
      details: 'Pccaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est ' +
      'laborum. Duis aute it in voluptate velit esse. Lorem ipsum dolor sit amet, consectetur ' +
      'adipiscing elitor incididunt ut labore. Duis aute irure dolor in reprehenderit. ' +
      'Excepteur sint occaecat cupidatat non proident.',
      image: '../../assets/logo/logo-11.png',
      favorite: false,
      category: 'c2'
    }
  ];
}
