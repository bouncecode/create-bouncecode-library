/**
 * GraphQL Resolver 를 실행하기 전에 권한을 확인하는 파일입니다.
 * {@link expressApp} 에서 GraphQL Resolver 를 실행하기 전에 권한을 확인할 때 사용됩니다.
 *
 * @author BounceCode, Inc.
 * @packageDocumentation
 * @module server.permissions
 * @preferred
 */

import { deny, allow, rule, and, or, not } from "graphql-shield";
import { Context } from "../express";

/**
 * 권한을 확인하는 함수입니다.
 *
 * @author BounceCode, Inc.
 */
const rules = {};

/**
 * Resolver 에 {@link rules} 를 적용합니다.
 *
 * @author BounceCode, Inc.
 */
const ruleTree = {
  Query: {
    test: allow,
  },
  Mutation: {
    test: allow,
  },
};

export default permissions;
