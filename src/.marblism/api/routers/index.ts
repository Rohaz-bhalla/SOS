/* eslint-disable */
import type { unsetMarker, AnyRouter, AnyRootConfig, CreateRouterInner, Procedure, ProcedureBuilder, ProcedureParams, ProcedureRouterRecord, ProcedureType } from "@trpc/server";
import type { PrismaClient } from "@prisma/client";
import createAccountRouter from "./Account.router";
import createUserRouter from "./User.router";
import createSessionRouter from "./Session.router";
import createRoleRouter from "./Role.router";
import createSessionDataRouter from "./SessionData.router";
import createLocationRouter from "./Location.router";
import createSosAlertRouter from "./SosAlert.router";
import createPoliceStationRouter from "./PoliceStation.router";
import createOfficerRouter from "./Officer.router";
import createEmergencyContactRouter from "./EmergencyContact.router";
import createRagVectorRouter from "./RagVector.router";
import { ClientType as AccountClientType } from "./Account.router";
import { ClientType as UserClientType } from "./User.router";
import { ClientType as SessionClientType } from "./Session.router";
import { ClientType as RoleClientType } from "./Role.router";
import { ClientType as SessionDataClientType } from "./SessionData.router";
import { ClientType as LocationClientType } from "./Location.router";
import { ClientType as SosAlertClientType } from "./SosAlert.router";
import { ClientType as PoliceStationClientType } from "./PoliceStation.router";
import { ClientType as OfficerClientType } from "./Officer.router";
import { ClientType as EmergencyContactClientType } from "./EmergencyContact.router";
import { ClientType as RagVectorClientType } from "./RagVector.router";

export type BaseConfig = AnyRootConfig;

export type RouterFactory<Config extends BaseConfig> = <
    ProcRouterRecord extends ProcedureRouterRecord
>(
    procedures: ProcRouterRecord
) => CreateRouterInner<Config, ProcRouterRecord>;

export type UnsetMarker = typeof unsetMarker;

export type ProcBuilder<Config extends BaseConfig> = ProcedureBuilder<
    ProcedureParams<Config, any, any, any, UnsetMarker, UnsetMarker, any>
>;

export function db(ctx: any) {
    if (!ctx.prisma) {
        throw new Error('Missing "prisma" field in trpc context');
    }
    return ctx.prisma as PrismaClient;
}

export function createRouter<Config extends BaseConfig>(router: RouterFactory<Config>, procedure: ProcBuilder<Config>) {
    return router({
        account: createAccountRouter(router, procedure),
        user: createUserRouter(router, procedure),
        session: createSessionRouter(router, procedure),
        role: createRoleRouter(router, procedure),
        sessionData: createSessionDataRouter(router, procedure),
        location: createLocationRouter(router, procedure),
        sosAlert: createSosAlertRouter(router, procedure),
        policeStation: createPoliceStationRouter(router, procedure),
        officer: createOfficerRouter(router, procedure),
        emergencyContact: createEmergencyContactRouter(router, procedure),
        ragVector: createRagVectorRouter(router, procedure),
    }
    );
}

export interface ClientType<AppRouter extends AnyRouter> {
    account: AccountClientType<AppRouter>;
    user: UserClientType<AppRouter>;
    session: SessionClientType<AppRouter>;
    role: RoleClientType<AppRouter>;
    sessionData: SessionDataClientType<AppRouter>;
    location: LocationClientType<AppRouter>;
    sosAlert: SosAlertClientType<AppRouter>;
    policeStation: PoliceStationClientType<AppRouter>;
    officer: OfficerClientType<AppRouter>;
    emergencyContact: EmergencyContactClientType<AppRouter>;
    ragVector: RagVectorClientType<AppRouter>;
}
