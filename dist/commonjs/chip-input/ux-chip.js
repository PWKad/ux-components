"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var aurelia_templating_1 = require("aurelia-templating");
var aurelia_pal_1 = require("aurelia-pal");
var aurelia_binding_1 = require("aurelia-binding");
var aurelia_dependency_injection_1 = require("aurelia-dependency-injection");
var aurelia_ux_1 = require("aurelia-ux");
var aurelia_ux_2 = require("aurelia-ux");
var UxChip = /** @class */ (function () {
    function UxChip(element, resources, styleEngine) {
        this.element = element;
        this.resources = resources;
        this.styleEngine = styleEngine;
        this.theme = null;
        this.value = undefined;
    }
    UxChip.prototype.created = function (_, myView) {
        this.view = myView;
    };
    UxChip.prototype.bind = function () {
        if (this.theme) {
            this.styleEngine.applyTheme(this, this.theme);
        }
    };
    UxChip.prototype.themeChanged = function (newValue) {
        this.styleEngine.applyTheme(this, newValue);
    };
    UxChip.prototype.closeChip = function () {
        var closeEvent = aurelia_pal_1.DOM.createCustomEvent('close', { bubbles: false });
        this.element.dispatchEvent(closeEvent);
    };
    __decorate([
        aurelia_templating_1.bindable
    ], UxChip.prototype, "theme", void 0);
    __decorate([
        aurelia_templating_1.bindable
    ], UxChip.prototype, "type", void 0);
    __decorate([
        aurelia_templating_1.bindable({ defaultBindingMode: aurelia_binding_1.bindingMode.twoWay })
    ], UxChip.prototype, "value", void 0);
    UxChip = __decorate([
        aurelia_dependency_injection_1.inject(Element, aurelia_templating_1.ViewResources, aurelia_ux_1.StyleEngine),
        aurelia_templating_1.customElement('ux-chip'),
        aurelia_templating_1.processAttributes(aurelia_ux_2.processDesignAttributes)
    ], UxChip);
    return UxChip;
}());
exports.UxChip = UxChip;
