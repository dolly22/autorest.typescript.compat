﻿// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License. See License.txt in the project root for license information.

'use strict';

import { should } from 'chai';
import * as msRest from '@azure/ms-rest-js';

import { AutoRestParameterGroupingTestService } from './generated/AzureParameterGrouping/autoRestParameterGroupingTestService';
import { ParameterGroupingPostOptionalOptionalParams, AutoRestParameterGroupingTestServiceOptions } from "./generated/AzureParameterGrouping/models";
var dummyToken = 'dummy12321343423';
var credentials = new msRest.TokenCredentials(dummyToken);

var clientOptions: AutoRestParameterGroupingTestServiceOptions = {
  baseUri: 'http://localhost:3000'
};

describe('typescript', function () {
  var body = 1234;
  var header = "header";
  var query = 21;
  var path = "path";

  describe('Azure Parameter Grouping', function () {
    var testClient = new AutoRestParameterGroupingTestService(credentials, clientOptions);
    it('should accept valid required parameters', function (done) {
      testClient.parameterGrouping.postRequired({ body: body, customHeader: header, query: query, path: path }, function (error, result, request, response) {
        error.should.not.exist;
        response.status.should.equal(200);
        done();
      });
    });

    it('should accept required parameters but null optional parameters', function (done) {
      testClient.parameterGrouping.postRequired({ body: body, path: path }, function (error, result, request, response) {
        error.should.not.exist;
        response.status.should.equal(200);
        done();
      });
    });

    it('should reject null required parameters', function (done) {
      testClient.parameterGrouping.postRequired(null, function (error, result, request, response) {
        error.should.exist;
        error.message.should.match(/.*cannot be null or undefined.*/);
        (result === undefined).should.be.true;
        response.should.not.exist;
        done();
      });
    });

    it('should accept valid optional parameters', function (done) {
      const options: ParameterGroupingPostOptionalOptionalParams = {
        parameterGroupingPostOptionalParameters: {
          query: query,
          customHeader: header
        }
      };
      testClient.parameterGrouping.postOptional(options, function (error, result, request, response) {
        error.should.not.exist;
        response.status.should.equal(200);
        done();
      });
    });

    it('should accept null optional parameters', function (done) {
      const options: ParameterGroupingPostOptionalOptionalParams = {
        parameterGroupingPostOptionalParameters: null
      };
      testClient.parameterGrouping.postOptional(options, function (error, result, request, response) {
        error.should.not.exist;
        response.status.should.equal(200);
        done();
      });
    });

    it('should allow multiple parameter groups', function (done) {
      var options = {
        firstParameterGroup: { headerOne: header, queryOne: query },
        parameterGroupingPostMultiParamGroupsSecondParamGroup: { headerTwo: "header2", queryTwo: 42 }
      };
      testClient.parameterGrouping.postMultiParamGroups(options, function (error, result, request, response) {
        error.should.not.exist;
        response.status.should.equal(200);
        done();
      });
    });

    it('should allow multiple parameter groups with some defaults omitted', function (done) {
      var options = {
        firstParameterGroup: { headerOne: header },
        parameterGroupingPostMultiParamGroupsSecondParamGroup: { queryTwo: 42 }
      };
      testClient.parameterGrouping.postMultiParamGroups(options, function (error, result, request, response) {
        error.should.not.exist;
        response.status.should.equal(200);
        done();
      });
    });

    it('should allow parameter group objects to be shared between operations', function (done) {
      var options = {
        firstParameterGroup: { headerOne: header, queryOne: 42 }
      };
      testClient.parameterGrouping.postSharedParameterGroupObject(options, function (error, result, request, response) {
        error.should.not.exist;
        response.status.should.equal(200);
        done();
      });
    });

  });
});
