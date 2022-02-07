import { Component, OnInit } from '@angular/core';

declare var $:any;

@Component({
  selector: 'app-progetti',
  templateUrl: './progetti.component.html',
  styleUrls: ['./progetti.component.css']
})
export class ProgettiComponent implements OnInit {
  
  editField: String;
  public flagTab = false;
  public flagAperta = false;
  public flagApertaAddRow = false;
  public supportoTipoClass;
  public supportoInput;
  public supCampo1;
  public supCampo2;
  public supCampo3;
  public supCampo4;
  public data;
  public label;
  public n;
  public idRow;
  public column;
  ngOnInit() {
    this.SetData();
    // };
    this.initSim();
  }
  initSim() {
    const comp = this;
    // const datePipe = this.datePipe;
    const table = $('#simDatatable').DataTable({
      data: this.data,
      'columnDefs': [{
        'targets': -1,
        'data': null,
        'render':
          function (data, type, row, meta) {
            const idCanc = 'cancella' + row.codice + 'zona';
            // tslint:disable-next-line: max-line-length
            return data[4] + '<button id="idCanc" class="btn btn-simple btn-icon col-md-6" title="Cancella"><i class="ti-trash"></i></button>'
          }
      }, {
        'targets': -2,
        'data': null,
        'render':
          function (data, type, row, meta) {
            const idz = 'modifica' + row.codice + 'zona';
            // tslint:disable-next-line: max-line-length
            return data[3] + '<button id="idz1" class="btn btn-simple btn-icon" title="Modifica"><i class="ti-pencil"></i></button>';
          }
      }, {
        'targets': -3,
        'data': null,
        'render':
          function (data, type, row, meta) {
            const idz = 'modifica' + row.codice + 'zona';
            // tslint:disable-next-line: max-line-length
            return data[2] + '<button id="idz2" class="btn btn-simple btn-icon" title="Modifica"><i class="ti-pencil"></i></button>';
          }
      }, {
        'targets': -4,
        'data': null,
        'render':
          function (data, type, row, meta) {
            const idz = 'modifica' + row.codice + 'zona';
            // tslint:disable-next-line: max-line-length
            return data[1] + '<button id="idz3" class="btn btn-simple btn-icon" title="Modifica"><i class="ti-pencil"></i></button>';
          }
      }, {
        'targets': -5,
        'data': null,
        'render':
          function (data, type, row, meta) {
            const idz = 'modifica' + row.codice + 'zona';
            // tslint:disable-next-line: max-line-length
            return data[0] + '<button id="idz4" class="btn btn-simple btn-icon" title="Modifica"><i class="ti-pencil"></i></button>';
          }
      },
      ],
      'createdRow': function (row, data, dataIndex) {
        if (data.DataDimissione != null || data.Stato === 2) {
          $(row).addClass('bkgr-red');
        }
      },
      'language': {
        'url': '//cdn.datatables.net/plug-ins/9dcbecd42ad/i18n/Italian.json'
      },
      // 'processing': true,
      // 'serverSide': true,
      // 'ajax': {
      //   'url': environment.apiUrl + '/hardwareapi/api/Sim',
      //   'headers': { 'Authorization': localStorage.getItem('token') },
      // },
      'columns': [
        { 'title': 'Codice', 'orderable': true },
        { 'title': 'Descrizione', 'orderable': true },
        { 'title': 'Indirizzo', 'orderable': true },
        { 'title': 'P. IVA', 'orderable': true },
        { 'title': '', 'orderable': false },
      ],
      'initComplete': function () {
        let self = 0;
        this.api().columns('.select-filter').every(function () {
          const column = this;
          const select = $('<th><select style="max-width: 100px;" id="id_' + self++ + '"><option value=""></option></select></th>')
            .appendTo($('#selects'))
            .on('change', function () {
              const val = $.fn.dataTable.util.escapeRegex(
                $(this).children('select').val()
              );

              column
                .search(val, true, false)
                .draw();
            });
        });

        $('div.toolber-inpt').html(
          '<label id="dismissed-sim"><input type="checkbox" id="chk-sim-dismissed" /></label>' + '<br />' +
          '<label id="status-dismiss"><input type="checkbox" id="chk-status" /></label>'
        );

        $('#dismissed-sim, #chk-sim-dismissed,#status-dismiss,#chk-status').click(function () {
          table.draw();
        });
      }

    })

    table.on('click', '#idz1', function (e) {
      const $td = $(this).closest('td');
      const data = table.row($td).data();
      comp.supportoInput = data[3];
      comp.supportoTipoClass = 'P. IVA';
      comp.flagAperta = true;
      comp.idRow = data[0];
      comp.column = 3;
    });

    table.on('click', '#idz2', function (e) {
      const $td = $(this).closest('td');
      const data = table.row($td).data();
      comp.supportoInput = data[2];
      comp.supportoTipoClass = 'Indirizzo';
      comp.flagAperta = true;
      comp.idRow = data[0];
      comp.column = 2;
    })

    table.on('click', '#idz3', function (e) {
      const $td = $(this).closest('td');
      const data = table.row($td).data();
      comp.supportoInput = data[1];
      comp.supportoTipoClass = 'Descrizione';
      comp.flagAperta = true;
      comp.idRow = data[0];
      comp.column = 1;
    });

    table.on('click', '#idz4', function (e) {
      const $td = $(this).closest('td');
      const data = table.row($td).data();
      comp.supportoInput = data[0];
      comp.supportoTipoClass = 'Codice';
      comp.flagAperta = true;
      comp.idRow = data[0];
      comp.column = 0;
    });

    table.on('click', '#idCanc', function (e) {
      const $tr = $(this).closest('tr');
      const data = table.row($tr).data();
      table.row($tr).remove().draw();
    });
  }   

  save() {
    this.data.filter(x => x[0] === this.idRow)[0][this.column] = this.supportoInput;
    const table = $('#simDatatable').DataTable();
    table.clear();
    table.rows.add(this.data);
    table.draw();
    this.flagAperta = false;
  }

  back() {
    this.flagAperta = false;
    this.flagApertaAddRow = false;
  }

  addRow() {
    const table = $('#simDatatable').DataTable();
    table.row.add([ this.supCampo1, this.supCampo2, this.supCampo3, this.supCampo4, ' ']).draw();
    this.supCampo1 = '';
    this.supCampo2 = '';
    this.supCampo3 = '';
    this.supCampo4 = '';
  }

  openAddRow() {
    this.flagApertaAddRow = true;
  }

  SetData() {
    this.data = [];
    this.data.push(['FF3D', 'FF3D.COM srl', ' ', ' ', ' ']);
    this.data.push(['NOESYS', 'MOESYSMOBILE SRL', ' ', ' ', ' ']);
  }
}

