import { browser, element, by } from "protractor";

describe('Mi prueba', ()=>{

    beforeEach (()=>{
        // codigo de configuracion
        browser.get("/");
        browser.driver.sleep(6000);

    })

    // PRUEBA 1
    it("El tab 1 se muestra por defecto",()=>{
        expect(element(by.css(".tab-selected ion-label")).getText()).toContain("Tab 1");
    });
});