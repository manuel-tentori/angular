import { Component, OnInit } from '@angular/core';
import * as XLSX from 'ts-xlsx';

declare var require: any
declare var $: any;



@Component({
    moduleId: module.id,
    selector: './nuovo-modello.component.html',
    templateUrl: 'nuovo-modello.component.html'
})

export class NuovoModelloComponent implements OnInit {
    modelClient: any;
    arrayBuffer: any;
    file: File;
    btCreate: boolean = false;
    t = false;

    ngOnInit() {
        //  Activate the tooltips
        $('[rel="tooltip"]').tooltip();


        $('.switch').bootstrapSwitch({
            onColor: 'primary'
        });

        $('.switch-plain').bootstrapSwitch({
            onColor: '',
            onText: '',
            offText: ''
        });

        $('.switch-icon').bootstrapSwitch({
            onColor: '',
            onText: '<i class="fa fa-check"></i>',
            offText: '<i class="fa fa-times"></i>'
        });

        // // Init Tags Input
        /*if($(".tagsinput").length != 0){
            $(".tagsinput").tagsinput();
        }*/

        //  Init Bootstrap Select Picker
        if ($(".selectpicker").length != 0) {
            $(".selectpicker").selectpicker({
                iconBase: "ti",
                tickIcon: "ti-check"
            });
        }

        $('.datetimepicker').datetimepicker({
            icons: {
                time: "fa fa-clock-o",
                date: "fa fa-calendar",
                up: "fa fa-chevron-up",
                down: "fa fa-chevron-down",
                previous: 'fa fa-chevron-left',
                next: 'fa fa-chevron-right',
                today: 'fa fa-screenshot',
                clear: 'fa fa-trash',
                close: 'fa fa-remove'
            }
        });

        $('.datepicker').datetimepicker({
            format: 'MM/DD/YYYY',    //use this format if you want the 12hours timpiecker with AM/PM toggle
            icons: {
                time: "fa fa-clock-o",
                date: "fa fa-calendar",
                up: "fa fa-chevron-up",
                down: "fa fa-chevron-down",
                previous: 'fa fa-chevron-left',
                next: 'fa fa-chevron-right',
                today: 'fa fa-screenshot',
                clear: 'fa fa-trash',
                close: 'fa fa-remove'
            }
        });

        $('.timepicker').datetimepicker({
            //          format: 'H:mm',    // use this format if you want the 24hours timepicker
            format: 'h:mm A',    //use this format if you want the 12hours timpiecker with AM/PM toggle
            icons: {
                time: "fa fa-clock-o",
                date: "fa fa-calendar",
                up: "fa fa-chevron-up",
                down: "fa fa-chevron-down",
                previous: 'fa fa-chevron-left',
                next: 'fa fa-chevron-right',
                today: 'fa fa-screenshot',
                clear: 'fa fa-trash',
                close: 'fa fa-remove'
            }

        });


        /*


       var noUiSlider = require('nouislider');
       var sliderRegular = document.getElementById('sliderRegular');

       noUiSlider.create(sliderRegular, {
           start: 40,
           connect: [true,false],
           range: {
               min: 0,
               max: 100
           }
       });

       var sliderDouble = document.getElementById('sliderDouble');

       noUiSlider.create(sliderDouble, {
           start: [ 20, 60 ],
           connect: true,
           range: {
               min:  0,
               max:  100
           }
       });*/
    }

    incomingfile(event) {
        this.file = event.target.files[0];
    }

    Upload() {
        let fileReader = new FileReader();
        fileReader.onload = (e) => {
            this.arrayBuffer = fileReader.result;
            var data = new Uint8Array(this.arrayBuffer);
            var arr = new Array();
            for (var i = 0; i != data.length; ++i) arr[i] = String.fromCharCode(data[i]);
            var bstr = arr.join("");
            var workbook = XLSX.read(bstr, { type: "binary" });
            var first_sheet_name = workbook.SheetNames[0];
            var worksheet = workbook.Sheets[first_sheet_name];
            console.log(XLSX.utils.sheet_to_json(worksheet, { raw: false,header: ["a","b","c","d"] }));
            this.modelClient = XLSX.utils.sheet_to_json(worksheet, { raw: false,header: ["a","b","c","d"] });
            this.modelClient.forEach(element => {
                element['isChecked'] = false;
            });
            this.t = true;
        }
        fileReader.readAsArrayBuffer(this.file);


    }
}



